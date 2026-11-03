// Provides functions for signing and verifying JSON Web Tokens.
import jwt from "jsonwebtoken"; 

// Reads the signing secret from the server environment.
const JWT_SECRET = process.env.JWT_SECRET; 
// Uses the configured token lifetime, defaulting to five hours.
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "5h"; 

// Fail early when the required signing secret is missing.
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET must be set in the environment."); 
}

// Creates a signed token with the configured or supplied lifetime.
export const generateToken = (payload, expiresIn = JWT_EXPIRES_IN) => { 
    return jwt.sign(payload, JWT_SECRET, { expiresIn }); 
};

// Validates a token's signature and expiration before returning its payload.
export const verifyToken = (token) => { 
    return jwt.verify(token, JWT_SECRET); 
};