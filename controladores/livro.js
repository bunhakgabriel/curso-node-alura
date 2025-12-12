const {
  getAllLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  removeLivro,
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

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422).send({ message: "ID inválido." });
    }
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

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    const modificacoes = req.body;
    modificaLivro(modificacoes, id);
    res.send({ message: "Livro atualizado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      removeLivro(id);
      res.send({ message: "Livro removido com sucesso!" });
    } else {
      res.status(422).send({ message: "ID inválido." });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
