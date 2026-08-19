import express from "express";

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.send("Hello, World!");
});

server.get("/about", (req, res) => {
  res.send("<h1>This is our key advantage outlines!</h1>");
});

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
