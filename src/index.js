require("dotenv").config();
const express = require("express");

const app = express();
const porta = process.env.PORT;

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("api funfando");
});

app.listen(porta, () => {
  console.log(`Servidor na porta:${process.env.PORT}`);
});
