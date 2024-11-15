import React from "react";

const Hello = () => {
  //   let myName = "Shakeel Ayaz";
  let fullName = () => {
    return "Muhammad Shakeel ayaz";
  };
  return (
    <div>
      <h1>Hello this is future speaking , I am you {fullName()}</h1>
    </div>
  );
};

export default Hello;
