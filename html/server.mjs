import { createServer } from "node:http";

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Ciao, questo è il mio server HTTP in Node.js!</h1>");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
