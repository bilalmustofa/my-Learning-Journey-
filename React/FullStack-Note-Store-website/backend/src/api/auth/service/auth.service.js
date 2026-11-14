/**
 * Authentication Service
 * 
 * Contains business logic for user authentication, password hashing with bcrypt,
 * and database transactions.
 */
import bcrypt from "bcrypt";
import { safeExecute } from "../../../../db/config.js";

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
