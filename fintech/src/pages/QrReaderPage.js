import React, { useState } from "react";
import TopBar from "../components/common/TopBar";
import { QrReader } from "react-qr-reader";

const QrReaderPage = () => {
  const [data, setData] = useState("No result");

  return (
    <div>
      <TopBar title={"QR 리더"}></TopBar>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
};

export default QrReaderPage;
