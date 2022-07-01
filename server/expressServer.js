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

app.post("/user", (req, res) => {
  const { userName, userEmail, userPassword, userPhone } = req.body;
  const sql =
    "INSERT INTO user (name, email, password, phone) VALUES (?,?,?,?)";
  connection.query(
    sql,
    [userName, userEmail, userPassword, userPhone],
    (err, result) => {
      console.log(result);
      res.json(result);
    }
  );
});

app.post("/userUpdate", (req, res) => {
  const { userId, userPhone } = req.body;
  const sql = "UPDATE user SET phone = ? WHERE id = ?";
  connection.query(sql, [userPhone, userId], (err, result) => {
    console.log(result);
    res.json(result);
  });
});

app.post("/login", (req, res) => {
  const { userEmail, userPassword } = req.body;
  const sql = "SELECT * FROM user WHERE email = ?";
  connection.query(sql, [userEmail], (err, result) => {
    if (result.length === 0) {
      res.json("회원 정보가 없습니다.");
    } else {
      console.log(result);
      if (result[0].password === userPassword) {
        res.json(true);
      } else {
        res.json(false);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
