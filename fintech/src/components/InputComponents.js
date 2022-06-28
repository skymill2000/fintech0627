import React from "react";
//#rafce

const InputComponents = () => {
  let contents = "초기 콘텐츠 입니다.";

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
  };

  return (
    <div>
      <p>{contents}</p>
      <input onChange={handleChange}></input>
    </div>
  );
};

export default InputComponents;
