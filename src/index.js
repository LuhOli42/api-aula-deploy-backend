require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("api funfando");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor na porta:${process.env.PORT}`);
});
