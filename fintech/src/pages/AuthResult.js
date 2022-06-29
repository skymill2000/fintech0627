import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
const AuthResult = () => {
  const parsed = queryString.parse(useLocation().search);
  console.log(parsed.code);
  return <div></div>;
};

export default AuthResult;
