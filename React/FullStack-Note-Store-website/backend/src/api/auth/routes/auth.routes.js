/**
 * Authentication Routes
 * 
 * Defines endpoints for user authentication operations (registration, login, logout).
 */
import express from "express";
import { registerController } from "../controller/auth.controller.js"
const router = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
router.post('/register', registerController);

export default router;

