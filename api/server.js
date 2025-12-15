import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./lib/db.js";

dotenv.config();

console.log("PGHOST:", process.env.PGHOST);
console.log("PGUSER:", process.env.PGUSER);
console.log("PGDATABASE:", process.env.PGDATABASE);
console.log("PGPASSWORD:", process.env.PGPASSWORD ? "OK" : "VAZIO");


const app = express();
app.use(cors());
app.use(express.json());

// TESTE
app.get("/ping", (req, res) => {
  res.json({ ok: true, msg: "API está viva" });
});

app.get("/teste-db", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({ ok: true, hora: result.rows[0] });
  } catch (err) {
    console.error("ERRO DB:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🔥 LISTAR TODOS OS LIVROS
app.get("/livros", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT 
        id,
        titulo,
        capa_url,
        sinopse
      FROM livros
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("ERRO AO BUSCAR LIVROS:", error);
    res.status(500).json({
      error: "Erro ao buscar livros",
      detalhe: error.message
    });
  }
});

// LIVRO POR ID (para tela de detalhes)
app.get("/livros/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      "SELECT id, titulo, capa_url, descricao FROM livros WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar livro" });
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log("🚀 API rodando em http://localhost:" + PORT)
);
