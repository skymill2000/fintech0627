var http = require("http");

http
  .createServer(function (req, res) {
    var body = "<h1>안녕하세여</h1>";
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(body);
  })
  .listen(4000);
