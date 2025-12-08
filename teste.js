const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoLivro = { id: "3", nome: "Livro mais que demais" };

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoLivro]));

console.log("Dados antigos: ", dadosAtuais);
console.log("Dados novos: ", JSON.parse(fs.readFileSync("livros.json")));
