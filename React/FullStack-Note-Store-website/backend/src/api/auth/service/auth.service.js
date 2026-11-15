/**
 * Authentication Service
 * 
 * Contains business logic for user authentication, password hashing with bcrypt,
 * database transactions, and JWT token issuance.
 */
import bcrypt from "bcrypt";
import { safeExecute } from "../../../../db/config.js";
import { generateToken } from "../../../utils/jwt.js";

const SALT_ROUNDS = 10;

/**
 * Registers a new user account.
 *
 * @param {object} params
 * @param {string} params.email - Cleaned user email
 * @param {string} params.password - Plaintext password to hash
 * @param {string} [params.role="USER"] - Assigned role
 * @returns {Promise<object>} Created user record without password
 */
export const registerService = async ({ email, password, role = "USER" }) => {
    // 1. Check if user already exists
    const existingUsers = await safeExecute(
        "SELECT id FROM users WHERE email = ? LIMIT 1",
        [email]
    );

    if (existingUsers && existingUsers.length > 0) {
        const error = new Error("An account with this email already exists.");
        error.statusCode = 409;
        throw error;
    }

    // 2. Hash plaintext password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // 3. Insert record into database
    await safeExecute(
        "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
        [email, hashedPassword, role]
    );

    // 4. Retrieve created record (omitting password)
    const [createdUser] = await safeExecute(
        "SELECT id, email, role, created_at FROM users WHERE email = ? LIMIT 1",
        [email]
    );

    return createdUser;
};

/**
 * Authenticates user credentials and issues a JSON Web Token.
 *
 * @param {object} credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - Raw password to verify
 * @returns {Promise<{ user: object, token: string }>} Sanitized user object and signed token
 */
export const loginService = async ({ email, password }) => {
    // Find user by email
    const rows = await safeExecute(
        "SELECT id, email, password, role, created_at FROM users WHERE email = ? LIMIT 1",
        [email]
    );

    // Validate user existence
    if (rows.length === 0) {
        const error = new Error("Invalid email or password.");
        error.statusCode = 401;
        throw error;
    }

    const user = rows[0];
    
    // Compare supplied password against stored bcrypt hash
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        const error = new Error("Invalid email or password.");
        error.statusCode = 401;
        throw error;
    }

    // Generate signed JWT token
    const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role
    });

    // Omit password hash before returning
    const { password: _, ...sanitizedUser } = user;

    return {
        user: sanitizedUser,
        token
    };
};

