const { Router } = require("express");
const { getLivros, getLivro, postLivro } = require("../controladores/livro");

const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);
router.post("/", postLivro);

router.patch("/:id", (req, res) => {
  res.send(`Atualizar o livro com ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Excluir o livro com ID ${req.params.id}`);
});

module.exports = router;
