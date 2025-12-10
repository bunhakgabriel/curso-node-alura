const { Router } = require("express");
const { getLivros, getLivro } = require("../controladores/livro");

const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);

router.post("/", (req, res) => {
  res.send("Adicionar um novo livro");
});

router.patch("/:id", (req, res) => {
  res.send(`Atualizar o livro com ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Excluir o livro com ID ${req.params.id}`);
});

module.exports = router;
