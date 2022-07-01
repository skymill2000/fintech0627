const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send("안녕하세요 익스프레스 서버 입니다.");
});

app.get("/getParams", (req, res) => {
  console.log(req.query);
  res.send(`너의 핀테크 번호는 ${req.query.fintech_use_num}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
