import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
const AuthResult = () => {
  const parsedCode = queryString.parse(useLocation().search).code;
  const [accessToken, setAccessToken] = useState("토큰 받아오기 전");
  const [userSeqNo, setUserSeqNo] = useState("시퀸스 넘버 받아오기전");
  const handleClick = () => {
    //axios 활용하여 Post 요청 작성하기
    const data = {
      code: parsedCode,
      client_id: "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF",
      client_secret: "yVT6irMr2h4ZTHzZY7sDpbvhm1nlOzr4nP7DYRVy",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    console.log(data);
    const sendData = queryString.stringify(data);
    console.log(sendData);

    const option = {
      method: "POST",
      url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: sendData,
    };
    axios(option).then(({ data }) => {
      setAccessToken(data.access_token);
      setUserSeqNo(data.user_seq_no);
    });
  };
  return (
    <div>
      <p>인증코드 : {parsedCode}</p>
      <button onClick={handleClick}>Access Token 발급 받기</button>
      <p>사용자 AccessToken : {accessToken}</p>
      <p>사용자 UserSeqNo : {userSeqNo}</p>
    </div>
  );
};

export default AuthResult;
