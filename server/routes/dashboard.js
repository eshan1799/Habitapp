const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db/db");

router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name, user_id FROM users WHERE user_id = $1",
      [req.user]
    );
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/habits", authorize, async (req, res) => {
  try {
    const user = await pool.query(
        'SELECT users.user_name, users.user_id, habits.habit, habits.frequency FROM habits LEFT JOIN users ON habits.user_id = users.user_id WHERE habits.user_id = $1',
        [req.user]
    );
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/event", authorize, async (req, res) => {
  try {
    const user = await pool.query(
        'SELECT * FROM events WHERE user_id = $1', [req.user]
    );
    res.json(user.rows);
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

router.post('/events', async (req, res) => {
  try {
    const { id, habit, date} = req.body;
    const user = await pool.query(
      'INSERT INTO events (user_id, habit, habitDate) VALUES ($1, $2, $3)', [id, habit, date]
    )
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

router.delete('/events', async (req, res) => {
  try {
    const { id, habit, date } = req.body
    const user = await pool.query(
      'DELETE FROM events WHERE user_id = $1 AND habit = $2 AND habitDate = $3', [id, habit, date]
    )
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

module.exports = router;