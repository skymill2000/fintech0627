import React from "react";
import TopBar from "../components/common/TopBar";

const NewsApiPage = () => {
  return (
    <div>
      <TopBar title={"뉴스 검색기"}></TopBar>
      <NewsSearchInput></NewsSearchInput>
      <NewsSearchResult></NewsSearchResult>
    </div>
  );
};

export default NewsApiPage;
