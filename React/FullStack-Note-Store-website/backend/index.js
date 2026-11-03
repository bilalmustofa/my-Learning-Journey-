// Import Express to create and configure the web server.
import express from "express"; 
// Load environment variables from the .env file.
import "dotenv/config"; 

// Use the configured port, or 4000 as a local default.
const PORT = process.env.PORT || 4000; 

// Create the Express application.
const app = express(); 

// Register a GET endpoint at /checker for checking server health.
app.get("/checker", (req, res) => {
   console.log("Server health check requested");
    res.status(200).send("Server health is good");
})

// Start listening for incoming requests on the selected port.
app.listen(PORT, (err) => {
    if(err) {
        console.error('Failed to start the server:', err.message);
    }
    console.log(`Server running on port http://localhost:${PORT}`);
})