import { verifyToken } from "../utils/jwt.js";

export const authenticateUser = (req, res, next) => {
    try {
        const authHeader = req.headers && req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Authentication token missing" })
        }

        const token = authHeader.split(' ')[1];
        let payload;

        try {
            payload = verifyToken(token);
        } catch (error) {
            return res.status(401).json({ success: false, message: "Invalid or Expired token" })
        }

        req.user = payload;
        return next();
    } catch (error) {
       console.error("Authentication Middle error", error)
       return res.status(500).json({success:false, message:"Internal server error"})
    }
}