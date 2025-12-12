import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./lib/db.js";

dotenv.config();

// 🔥 AQUI VOCÊ CRIA O app — SEM ISSO NADA FUNCIONA
const app = express();

app.use(cors());
app.use(express.json());

// 🔍 Teste de conexão
app.get("/api/teste", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({ ok: true, server_time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📚 LISTAR TODOS OS LIVROS
app.get("/livros", async (req, res) => {
  try {
    const sql = `
      SELECT 
        id,
        nome AS titulo,
        capa,
        descricao,
        pdf
      FROM livros
      ORDER BY id ASC
    `;

    const result = await db.query(sql);
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
});

// 📘 Buscar livro por ID
app.get("/api/livro/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
      SELECT id, nome, autor, capa, descricao, comentario 
      FROM livros 
      WHERE id = $1
    `;
    const result = await db.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao consultar banco:", error);
    res.status(500).json({ error: "Erro interno" });
  }
});

// 🚀 Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log("API rodando na porta " + PORT));
