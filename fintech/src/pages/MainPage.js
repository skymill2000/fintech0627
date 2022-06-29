import React, { useEffect } from "react";
import TopBar from "../components/common/TopBar";
import MainCard from "../components/main/MainCard";

const MainPage = () => {
  useEffect(() => {
    console.log("안녕");
    getAcountList();
  }, []);

  const getAcountList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");
    console.log(accessToken, userSeqNo);
    //axios 로 /v2.0/user/me?user_seq_no=1100034736 요청 작성하기
    //header Authorization 값 입력
  };

  return (
    <div>
      <TopBar title={"계좌 목록"} />
      <MainCard></MainCard>
    </div>
  );
};

export default MainPage;
