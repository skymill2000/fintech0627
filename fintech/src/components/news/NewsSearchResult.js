import React from "react";

const NewsSearchResult = ({ searchList }) => {
  return (
    <div>
      {searchList.map((news) => {
        return (
          <div>
            <p>{news.title}</p>
            <img src={news.urlToImage}></img>
            <a href={news.url}>기사 보기</a>
          </div>
        );
      })}
    </div>
  );
};

export default NewsSearchResult;
