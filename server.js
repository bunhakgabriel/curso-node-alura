import express from "express";

const app = express();

app.get("/usuarios", (req, res) => {
  res.send("Lista de usuáriossss");
});

app.post("/usuarios", (req, res) => {
  res.send("Criar um novo usuário");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
