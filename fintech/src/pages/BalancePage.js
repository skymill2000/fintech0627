import React, { useEffect, useState } from "react";
import BalanceCard from "../components/balance/BalanceCard";
import TopBar from "../components/common/TopBar";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import TransactionList from "../components/balance/TransactionList";

const BalancePage = () => {
  const fintechUseNo = queryString.parse(useLocation().search).fintechUseNo;
  const [balanceData, setBalanceData] = useState({});
  const [transactionList, setTransactionList] = useState([]);
  console.log(fintechUseNo);

  useEffect(() => {
    getBalance();
    getTransactionList();
  }, []);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };

  const getBalance = () => {
    const accessToken = localStorage.getItem("accessToken");

    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        tran_dtime: "20220630104700",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      setBalanceData(data);
    });
  };
  //useEffect
  //amount state
  //axios 요청을 작성
  //banktransid 작성 ??<----

  const getTransactionList = () => {
    const accessToken = localStorage.getItem("accessToken");

    const option = {
      method: "GET",
      url: "/v2.0/account/transaction_list/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20220101",
        to_date: "20220101",
        sort_order: "D",
        tran_dtime: "20220630104700",
      },
    };
    axios(option).then(({ data }) => {
      setTransactionList(data.res_list);
    });
  };

  return (
    <div>
      <TopBar title={"잔액조회"}></TopBar>
      <BalanceCard
        bankName={balanceData.bank_name}
        fintechNo={fintechUseNo}
        balance={balanceData.balance_amt}
      ></BalanceCard>
      <TransactionList transactionList={transactionList}></TransactionList>
    </div>
  );
};

export default BalancePage;
