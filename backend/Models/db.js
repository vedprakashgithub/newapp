const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,  // Allow up to 10 connections
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ MySQL Connection Error:", err);
        return;
    }
    console.log("✅ Connected to MySQL database");
    connection.release();  // Release connection back to pool
});

module.exports = pool;
