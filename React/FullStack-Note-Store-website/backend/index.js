/**
 * Server Entry Point
 * 
 * Configures and bootstraps the Express application, loads environment variables,
 * registers basic endpoints, and initiates the server alongside database verification.
 */
import "dotenv/config"; 
import express from "express"; 
import { checkDbConnection } from "./db/config.js";

// Network port configuration: uses PORT from .env, defaulting to 4000
const PORT = process.env.PORT || 4000; 

// Initialize the Express application instance
const app = express(); 

/**
 * Health Check Route
 * GET /checker
 * 
 * Used by monitoring tools and developers to verify that the server is up and responsive.
 */
app.get("/checker", (req, res) => {
    console.log("Server health check requested");
    res.status(200).send("Server health is good");
});

/**
 * Start listening for incoming HTTP requests on the configured port.
 * Performs database connectivity verification upon startup.
 */
const server = app.listen(PORT, async (err) => {
    if (err) {
        console.error("Failed to start the server:", err.message);
        return;
    }
    console.log(`Server running on port http://localhost:${PORT}`);
    
    // Verify that the MySQL database is reachable
    await checkDbConnection();
})
