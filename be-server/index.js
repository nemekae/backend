import express from "express";

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.send("<h1>Hello, Welcome!</h1>");
});

server.get("/about", (req, res) => {
  res.send("<h2>This is our key advantage outlines!</h2>");
});

server.get("/contact", (req, res) => {
  res.send("<h3>Get in touch --- nemekae@email.com</h3>");
});

server.post("/register", (req, res) => {
  res.sendStatus(201);
})

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
