const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "service",
  password: "1q2w3e4r!",
  database: "fintech",
});

app.use(express.json());
//JSON 형태의 데이터 전송을 허용하겠다
app.use(express.urlencoded({ extended: false }));
//urlencoded 형식의 데이터 전송을 허용하겠다

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

app.post("/postBody", (req, res) => {
  console.log(req.body);
  res.send("");
});

app.post("/addNumber", (req, res) => {
  const { firstNum, secondNum } = req.body;
  const result = Number(firstNum) + Number(secondNum);
  res.send("결과는: " + result);
});

app.get("/user", (req, res) => {
  const userName = req.query.userName;
  const sql = "SELECT * FROM user WHERE name = ?";
  connection.query(sql, [userName], (err, result) => {
    console.log(result);
    res.json(result);
  });
});
//req 로 firstNum secondNum 더한 값을 response 라우터 추가
//Method : POST
//url : /addNumber

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
