import React from "react";
import TopBar from "../components/common/TopBar";
import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  const fintechUseNo = queryString.parse(useLocation().search).fintechUseNo;

  return (
    <div>
      <TopBar title={"QR코드"}></TopBar>
      <QRBlock>
        <QRCodeSVG size={200} value={fintechUseNo} />
        <br />
        <p>{fintechUseNo}</p>
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
