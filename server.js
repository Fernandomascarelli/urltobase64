const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Servidor de pe");
});

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
