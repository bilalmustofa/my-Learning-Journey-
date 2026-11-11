/**
 * MySQL Database Configuration & Connection Pool
 * 
 * Initializes and exports a promise-based MySQL connection pool using mysql2.
 * Reads connection settings from environment variables.
 */
import "dotenv/config";
import mysql from "mysql2/promise";

/**
 * Shared MySQL connection pool.
 */
export const db = mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD ?? process.env.DB_PASS ?? "",
    database: process.env.DB_NAME,
});

/**
 * Tests and verifies the MySQL database connection.
 * Acquires a connection from the pool and immediately releases it back.
 *
 * @returns {Promise<boolean>} Resolves to true if the connection is successful, or false on error
 */
export const checkDbConnection = async () => {
    try {
        const connection = await db.getConnection();
        console.log("MySQL database connected successfully.");
        connection.release();
        return true;
    } catch (error) {
        console.error("Database connection failed:", error.message);
        return false;
    }
};

/**
 * Executes a parameterized SQL query safely using prepared statements.
 *
 * @param {string} sql - The parameterized SQL query string (e.g., using `?` placeholders)
 * @param {Array} [params=[]] - The array of values bound to the query parameters
 * @returns {Promise<any>} The query execution result
 */
export const safeExecute = async (sql, params = []) => {
    const [result] = await db.execute(sql, params);
    return result; 
};