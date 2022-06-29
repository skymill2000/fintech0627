import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
const AuthResult = () => {
  const parsedCode = queryString.parse(useLocation().search).code;
  const handleClick = () => {
    //axios 활용하여 Post 요청 작성하기
    const data = {};

    const sendData = queryString.stringify(data);

    const option = {
      method: "POST",
      url: "",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: sendData,
    };
    axios(option).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <p>인증코드 : {parsedCode}</p>
      <button onClick={handleClick}>Access Token 발급 받기</button>
    </div>
  );
};

export default AuthResult;
