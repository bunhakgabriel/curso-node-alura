const fs = require("fs");

function getLivros(req, res) {
  try {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    res.send(livros);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

module.exports = {
  getLivros,
};
