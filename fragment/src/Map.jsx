// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";

const MapMethod = () => {
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

export default MapMethod;
