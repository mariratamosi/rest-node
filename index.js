import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`Hello server`);
});

app.listen(PORT, () => {
  console.log(`Server starts at ${PORT}`);
});

//http://localhost:4000/
