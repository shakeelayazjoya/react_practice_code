// import React from "react";
import "./App.css";
import ClockHeading from "./ClockHeading";
import ClockSlogan from "./ClockSlogan";
import ClockTime from "./ClockTime";
import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  return (
    <>
      <div className="text-center">
        {" "}
        <h1>Clock</h1>
        <ClockHeading />
        <ClockSlogan />
        <ClockTime />
      </div>
    </>
  );
};

export default App;
