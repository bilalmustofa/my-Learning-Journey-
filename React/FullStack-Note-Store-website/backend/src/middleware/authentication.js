/**
 * Authentication Middleware
 * 
 * Verifies the JSON Web Token (JWT) provided in the HTTP Authorization header.
 * If valid, attaches the decoded user payload to `req.user` and passes control
 * to the next middleware or route handler.
 */
import { verifyToken } from "../utils/jwt.js";

/**
 * Middleware to authenticate requests using a Bearer token.
 *
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware callback
 * @returns {void|import('express').Response}
 */
export const authenticateUser = (req, res, next) => {
    try {
        // Extract the Authorization header (expected format: "Bearer <token>")
        const authHeader = req.headers && req.headers.authorization;

        // Reject if the header is missing or does not follow Bearer schema
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Authentication token missing" });
        }

        // Extract the token string from the header
        const token = authHeader.split(' ')[1];
        let payload;

        // Validate and decode the JWT token
        try {
            payload = verifyToken(token);
        } catch (error) {
            return res.status(401).json({ success: false, message: "Invalid or Expired token" });
        }

        // Attach the verified user payload to the request object for downstream handlers
        req.user = payload;
        return next();
    } catch (error) {
        // Handle unexpected runtime errors during middleware execution
        console.error("Authentication MiddleWare error", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
