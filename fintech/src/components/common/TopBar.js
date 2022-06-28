import React from "react";
import styled from "styled-components";

const TopBarBlock = styled.div`
  height: 60px;
  font-size: 15px;
  font-weight: bold;
  border-bottom: 1px solid #000;
`;

const TopBar = () => {
  return <TopBarBlock>안녕하세요</TopBarBlock>;
};

export default TopBar;
