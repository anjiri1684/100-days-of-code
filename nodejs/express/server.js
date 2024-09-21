const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("hi");
  console.log("Hello");
});

app.listen(5500, () => console.log("Server is Running"));
