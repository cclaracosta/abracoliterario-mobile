import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST,
  port: 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: { rejectUnauthorized: false }
});

try {
  const res = await pool.query("SELECT NOW()");
  console.log("✅ CONECTOU:", res.rows[0]);
} catch (err) {
  console.error("❌ ERRO REAL:", err);
}
