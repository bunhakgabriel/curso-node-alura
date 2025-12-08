const express = require("express");
const livroRouter = require("./rotas/livro");

const app = express();
app.use(express.json());

app.use("/livros", livroRouter);

app.listen(8000, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
