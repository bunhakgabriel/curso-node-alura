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

function insereLivro(livroNovo) {
  try {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    livros.push(livroNovo);
    fs.writeFileSync("livros.json", JSON.stringify(livros));
  } catch (err) {
    throw new Error("Erro ao escrever no arquivo de livros: " + err.message);
  }
}

function modificaLivro(modificacoes, id) {
  try {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);
    livrosAtuais[indiceModificado] = {
      ...livrosAtuais[indiceModificado],
      ...modificacoes,
    };
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
  } catch (err) {
    throw new Error("Erro ao escrever no arquivo de livros: " + err.message);
  }
}

function removeLivro(id) {
  try {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceRemovido = livrosAtuais.findIndex((livro) => livro.id === id);

    if (indiceRemovido === -1) {
      throw new Error("Nenhum registro encontrado com o ID informado.");
    }

    livrosAtuais.splice(indiceRemovido, 1);
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
  } catch (err) {
    throw new Error("Erro ao escrever no arquivo de livros: " + err.message);
  }
}

module.exports = {
  getAllLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  removeLivro,
};
