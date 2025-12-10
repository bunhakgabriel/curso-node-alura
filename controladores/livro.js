const {
  getAllLivros,
  getLivroPorId,
  insereLivro,
} = require("../servicos/livro");

function getLivros(req, res) {
  try {
    const livros = getAllLivros();
    res.send(livros);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201).send({ message: "Livro inserido com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
};
