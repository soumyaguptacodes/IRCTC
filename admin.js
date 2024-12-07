// routes/admin.js
const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.post("/add-train", (req, res) => {
  const { train_name, source, destination, total_seats } = req.body;

  const query =
    "INSERT INTO trains (train_name, source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?, ?)";
  db.query(
    query,
    [train_name, source, destination, total_seats, total_seats],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ message: "Train added successfully" });
    }
  );
});

module.exports = router;
