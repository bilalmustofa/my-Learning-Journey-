/**
 * Main API Router Gateway
 * 
 * Aggregates and mounts feature-specific routers (auth, notes, etc.)
 * into a single unified routing interface.
 */
import express from "express";
import authRoutes from "./auth/routes/auth.routes.js";

export const mainRouter = express.Router();

// Mount authentication sub-routes under "/auth" (e.g., /api/auth/*)
mainRouter.use("/auth", authRoutes);

export default mainRouter;