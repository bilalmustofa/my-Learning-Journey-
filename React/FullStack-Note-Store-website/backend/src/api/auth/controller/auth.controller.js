
/**
 * Authentication Controller
 * 
 * Handles incoming HTTP requests for authentication routes, validates request payloads,
 * delegates business logic to authentication services, and returns formatted HTTP responses.
 */
import { registerService } from "../service/auth.service.js";

/**
 * Controller to handle new user registration.
 *
 * @param {import('express').Request} req - Express request object containing `{ email, password }` in `req.body`
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 * @returns {Promise<import('express').Response>}
 */
export const registerController = async (req, res, next) => {
    try {
        const { email, password } = req.body || {};

        // 1. Validate required input fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required."
            });
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address."
            });
        }

        // Password strength requirement (minimum 6 characters)
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long."
            });
        }

        // 2. Delegate account creation to the service layer
        const newUser = await registerService({
            email: email.trim().toLowerCase(),
            password,
            role: "USER"
        });

        // 3. Return sanitized response (ensure password hash is omitted)
        const { password: _, ...sanitizedUser } = newUser;

        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            user: sanitizedUser
        });

    } catch (error) {
        console.error("Registration controller error:", error);

        // Handle duplicate email conflict (MySQL error ER_DUP_ENTRY / 1062 or custom error)
        if (error.code === "ER_DUP_ENTRY" || error.statusCode === 409 || error.message?.includes("already exists")) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists."
            });
        }

        // Return a generic 500 error for unexpected server exceptions
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};

