const http = require("http");
const PORT = `3000`;
const HOST = `127.0.0.1`;

const server = http.createServer((request, response) => {
  response.end("Hello, Galvanize");
});
server.listen(PORT, HOST, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});