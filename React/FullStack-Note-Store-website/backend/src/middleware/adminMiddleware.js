/**
 * Admin Authorization Middleware
 * 
 * Verifies that the authenticated user possesses administrator privileges.
 * Note: This middleware must be executed after `authenticateUser` so that `req.user` is populated.
 */

/**
 * Middleware to restrict route access exclusively to administrator accounts.
 *
 * @param {import('express').Request} req - Express request object (expects `req.user` to be set)
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware callback
 * @returns {void|import('express').Response}
 */
export const requireAdmin = (req, res, next) => {
    try {
        // Retrieve the authenticated user payload populated by the authentication middleware
        const user = req.user;

        // Reject with 401 Unauthorized if the user is not authenticated
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: "Authentication required" 
            });
        }

        // Determine the expected admin role name from environment variables, defaulting to "ADMIN"
        const adminRole = process.env.ADMIN_ROLE ? process.env.ADMIN_ROLE : "ADMIN";

        // Reject with 403 Forbidden if the user has no defined role
        if (typeof user.role === "undefined" || user.role === null) {
            return res.status(403).json({
                success: false,
                message: "Admin access required"
            });
        }

        // Reject with 403 Forbidden if the user's role does not match the configured admin role
        if (user.role !== adminRole) {
            return res.status(403).json({
                success: false,
                message: "Admin access required"
            });
        }

        // User is verified as an administrator; proceed to the next middleware or route handler
        return next();

    } catch (error) {
        // Handle unexpected runtime errors during role verification
        console.error("requireAdmin middleware error", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
