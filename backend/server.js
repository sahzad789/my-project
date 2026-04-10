const http = require('http');

http.createServer((req, res) => {
  res.end("Hello Backend 🚀");
}).listen(3000);