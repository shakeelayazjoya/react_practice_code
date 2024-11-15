// ErrorMsg.js
// import React from "react";

const ErrorMsg = ({ items }) => {
  return <div>{items.length === 0 ? <h3>I am Still Hungry</h3> : null}</div>;
};

export default ErrorMsg;
