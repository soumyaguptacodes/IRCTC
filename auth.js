// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Check if email already exists
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) throw err;

      // Insert new user into the database
      const query =
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
      db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) throw err;
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  });
});

module.exports = router;
// routes/auth.js (add to the same file)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    bcrypt.compare(password, result[0].password, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });

      // Generate JWT token
      const token = jwt.sign(
        { id: result[0].id, role: result[0].role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json({ token });
    });
  });
});
