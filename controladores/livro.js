const { getAllLivros } = require("../servicos/livro");

function getLivros(req, res) {
  try {
    const livros = getAllLivros();
    res.send(livros);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

module.exports = {
  getLivros,
};
