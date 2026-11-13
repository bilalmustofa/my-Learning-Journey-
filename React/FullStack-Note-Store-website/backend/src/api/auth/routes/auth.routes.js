/**
 * Authentication Routes Module
 * 
 * Defines HTTP route mappings for user authentication and authorization workflows.
 * Base Mount Point: `/api/auth` (configured in mainRouter)
 */
import express from "express";
import { registerController } from "../controller/auth.controller.js";

// Initialize an isolated Express router instance for authentication
const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user account
 * @access  Public
 */
router.post("/register", registerController);

export default router;

