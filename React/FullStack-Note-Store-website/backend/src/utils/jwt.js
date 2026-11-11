/**
 * JWT Utility Module
 * 
 * Provides helper functions for signing and verifying JSON Web Tokens (JWT).
 * Uses secret keys and expiration durations configured in environment variables.
 */
import jwt from "jsonwebtoken"; 

// Secret key used to digitally sign and verify tokens
const JWT_SECRET = process.env.JWT_SECRET; 

// Default token lifetime (e.g., "5h", "1d"), falling back to 5 hours if unspecified
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "5h"; 

// Fail fast on application startup if the critical secret key is missing
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET must be set in the environment."); 
}

/**
 * Generates and signs a new JSON Web Token (JWT).
 *
 * @param {object|string|Buffer} payload - The user/session data to encode inside the token (e.g., { id, role })
 * @param {string|number} [expiresIn=JWT_EXPIRES_IN] - Token expiration duration (e.g., "1h", "7d", or numeric seconds)
 * @returns {string} The digitally signed JWT string
 */
export const generateToken = (payload, expiresIn = JWT_EXPIRES_IN) => { 
    return jwt.sign(payload, JWT_SECRET, { expiresIn }); 
};

/**
 * Verifies the validity and authenticity of a JSON Web Token.
 *
 * @param {string} token - The raw JWT string to verify
 * @returns {object|string} The decoded payload if signature and expiration are valid
 * @throws {import('jsonwebtoken').JsonWebTokenError} If the signature is invalid or token is malformed
 * @throws {import('jsonwebtoken').TokenExpiredError} If the token expiration timestamp has passed
 */
export const verifyToken = (token) => { 
    return jwt.verify(token, JWT_SECRET); 
};
