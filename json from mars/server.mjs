const http = require("http"); // Importa il modulo HTTP

// Crea il server HTTP
const server = http.createServer((req, res) => {
  const responseBody = JSON.stringify({ location: "Mars" }); // Corpo della risposta JSON
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Content-Length": responseBody.length,
  }); // Imposta le intestazioni della risposta
  res.end(responseBody); // Invia la risposta JSON
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
