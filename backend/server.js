const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM devices ORDER BY regexp_replace(driver, '\\D', '', 'g')::integer ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengambil data" });
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.error("Gagal start server:", err);
  }
});