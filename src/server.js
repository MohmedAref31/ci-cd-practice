const http = require("http");
const { getResponse } = require("./app");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  const { statusCode, body } = getResponse(req.url || "/");

  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(body));
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
