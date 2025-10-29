const { Router } = require("express");
const pool = require("../db/pool");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    res.render("index", { messages: rows });
  } catch (err) {
    console.error(err);
    // send a response so the request doesn't hang and upstream (Railway) won't return 502
    res.status(500).send('Database query failed');
  }
});

router.post("/new", async (req, res) => {
  const { user, text } = req.body;
  try {
    await pool.query("INSERT INTO messages (message, username, added) VALUES ($1, $2, $3)", [text, user, new Date()]);
    res.redirect("/");
  } catch (err) {
    console.error("Error inserting message:", err);
    res.status(500).send("Database insert failed");
  }
});

router.get("/message/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);

    if (rows.length === 0) {
      return res.status(404).send("Message not found");
    }

    res.render("message", { message: rows[0] });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Database query failed");
  }
});

module.exports = router;
