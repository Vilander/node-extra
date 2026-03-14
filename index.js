require("dotenv").config();
const carros = require("./frota");

const express = require("express");
const cors = require("cors");
const { fnListarCarros } = require("./frota");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send();
});

carros.fnListarCarros();
carros.fnCadastrarCarro({ marca: "VW", modelo: "Fusca" });
carros.fnListarCarros();

console.log(process.env.PORTA);

app.listen(process.env.PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORTA}`);
});
