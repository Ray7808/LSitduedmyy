const http = require("http");
const server = http.createServer(handler);

function handler(req, res) {
  console.log(req.url);
  res.write("Hello");
  res.end();
}

server.listen(5001);
