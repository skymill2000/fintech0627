import React, { useState } from "react";
import TopBar from "../components/common/TopBar";
import NewsSearchInput from "../components/news/NewsSearchInput";
import axios from "axios";
import NewsSearchResult from "../components/news/NewsSearchResult";

const NewsApiPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleClick = () => {
    console.log(searchInput);
    //# 1. axios news api 요청 전달
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchInput}&from=2022-05-28&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko`
      )
      .then(({ data }) => {
        setSearchList(data.articles);
        console.log(searchList);
      });

    //# 2. state 생성 뉴스 API 로 부터 받은 결과 값
    //# 3. state 요청으로 받은 응답을 할당
    //# 4. NewsSearchResult 컴포넌트에 데이터 전달
  };

  return (
    <div>
      <TopBar title={"뉴스 검색기"}></TopBar>
      <NewsSearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></NewsSearchInput>
      <NewsSearchResult searchList={searchList}></NewsSearchResult>
    </div>
  );
};

export default NewsApiPage;
