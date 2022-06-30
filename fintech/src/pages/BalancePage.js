import React, { useEffect } from "react";
import BalanceCard from "../components/balance/BalanceCard";
import TopBar from "../components/common/TopBar";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const BalancePage = () => {
  const fintechUseNo = queryString.parse(useLocation().search).fintechUseNo;
  console.log(fintechUseNo);
  useEffect(() => {
    getBalance();
  }, []);

  const getBalance = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");
    console.log(accessToken, userSeqNo);
    const option = {
      method: "GET",
      url: "",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: { user_seq_no: userSeqNo },
    };
    axios(option).then(({ data }) => {});
  };
  //useEffect
  //amount state
  //axios 요청을 작성
  //banktransid 작성 ??<----
  return (
    <div>
      <TopBar title={"잔액조회"}></TopBar>
      <BalanceCard></BalanceCard>
    </div>
  );
};

export default BalancePage;
