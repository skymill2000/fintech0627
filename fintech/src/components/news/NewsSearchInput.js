import React from "react";

const NewsSearchInput = ({ handleClick, handleChange }) => {
  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>전송</button>
    </div>
  );
};

export default NewsSearchInput;
