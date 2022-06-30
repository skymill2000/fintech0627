import React from "react";
import BalanceCard from "../components/balance/BalanceCard";
import TopBar from "../components/common/TopBar";

const BalancePage = () => {
  return (
    <div>
      <TopBar title={"잔액조회"}></TopBar>
      <BalanceCard></BalanceCard>
    </div>
  );
};

export default BalancePage;
