const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../Models/db"); // Import MySQL connection
const router = express.Router();

// Create User (Signup)
router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: "All fields are required!" });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        
        db.query(sql, [username, hashedPassword], (err, result) => {
            if (err) return res.status(500).json({ message: "User already exists!" });
            res.status(201).json({ message: "User created successfully!" });
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
