// Props.js
// import React from "react";
import Container from "./Components/Container";
import ErrorMsg from "./Components/ErrorMsg";
import FoodInput from "./Components/FoodInput";
import FoodItem from "./Components/FoodItem";

const Props = () => {
  let foodItem = ["sabzi", "cheese", " preserves", "sugar"];
  //   let foodItem = [];
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>Healthy food</h1>
      <FoodItem items={foodItem} />
      <FoodInput handleOnChange={handleOnChange} />
      <ErrorMsg items={foodItem} />
      <Container />
    </div>
  );
};

export default Props;
