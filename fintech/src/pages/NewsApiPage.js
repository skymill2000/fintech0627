import React, { useState } from "react";
import TopBar from "../components/common/TopBar";
import NewsSearchInput from "../components/news/NewsSearchInput";

const NewsApiPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleClick = () => {
    console.log(searchInput);
  };

  return (
    <div>
      <TopBar title={"뉴스 검색기"}></TopBar>
      <NewsSearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></NewsSearchInput>
      {/* <NewsSearchResult></NewsSearchResult> */}
    </div>
  );
};

export default NewsApiPage;
