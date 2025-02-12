const http = require("http");
const server = http.createServer((req, res) => {
  const responseBody = JSON.stringify({ location: "Mars" });
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Content-Length": responseBody.length,
  });
  res.end(responseBody);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
