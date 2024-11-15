// Props.js
// import React from "react";
import ErrorMsg from "./Components/ErrorMsg";
import FoodItem from "./Components/FoodItem";

const Props = () => {
  let foodItem = ["sabzi", "cheese", " preserves", "sugar"];
  //   let foodItem = [];
  return (
    <div>
      <h1>Healthy food</h1>
      <FoodItem items={foodItem} />
      <ErrorMsg items={foodItem} />
    </div>
  );
};

export default Props;
