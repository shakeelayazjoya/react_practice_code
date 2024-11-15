// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";

const ConditionalRendering = () => {
  {
    /*"dall",
    "rooti",
    "vegetables",
    "cheese",
    " preserves",
    "milk",
    "ghi",
    */
  }
  //   let foodItem =[]
  let foodItem = [
    "dall",
    "rooti",
    "vegetables",
    "cheese",
    " preserves",
    "milk",
    "ghi",
  ];

  return (
    <>
      <h1>Healthy food</h1>
      {foodItem.length === 0 && <h3>I am Still Hungry</h3>}
      <ul className="list-group">
        {foodItem.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ConditionalRendering;
