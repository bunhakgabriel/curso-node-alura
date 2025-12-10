const fs = require("fs");

function getAllLivros() {
  try {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    return livros;
  } catch (err) {
    throw new Error("Erro ao ler o arquivo de livros: " + err.message);
  }
}

function getLivroPorId(id) {
  try {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livro = livros.find((livro) => livro.id === id);
    return livro;
  } catch (err) {
    throw new Error("Erro ao ler o arquivo de livros: " + err.message);
  }
}

module.exports = {
  getAllLivros,
  getLivroPorId,
};
