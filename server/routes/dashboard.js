const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db/db");

router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name FROM users WHERE user_id = $1",
      [req.user]
    );
    console.log(req.user)
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/habits", async (req, res) => {
  try {
    const { id, habit, frequency } = req.body;
    const user = await pool.query(
      "INSERT INTO habits (user_id, habit, frequency) VALUES ($1, $2, $3)",
      [id, habit, frequency]
    );
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
