import React, { useState } from "react";
//#rafce

const InputComponents = () => {
  //   let contents = "초기 콘텐츠 입니다.";
  const [contents, setContents] = useState("초기 콘텐츠입니다.");

  const handleChange = (event) => {
    const { value } = event.target;
    setContents(value);
  };

  return (
    <div>
      <p>{contents}</p>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default InputComponents;
