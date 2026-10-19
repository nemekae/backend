import http from "node:http"
import path from "node:path"
import fs from 'node:fs'

const PORT = 8000;

// get the name of the directory  holding this current file (server.js)
const __dirname = import.meta.dirname

// the main JS server:
const server = http.createServer( async(req, res) => {
  
  // Find the path to index.html inside the public folder, relative to the current file.
  const pathToResource = path.join(__dirname, "public", "index.html");

  //get the content in the index.html and read it
  const content = await fs.readFile(pathToResource, 'utf-8')

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(content);
})

// server is listening on port:
server.listen(PORT, () => {`server successfully login on port ${PORT}`})

