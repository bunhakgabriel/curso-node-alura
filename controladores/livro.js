function getLivros(req, res) {
  try {
    res.send("Atualizando a lista de livrossssssssssss");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

module.exports = {
  getLivros,
};
