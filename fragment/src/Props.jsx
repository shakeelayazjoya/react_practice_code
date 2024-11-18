// Props.js
// import React from "react";
import { useState } from "react";
import Container from "./Components/Container";
import ErrorMsg from "./Components/ErrorMsg";
import FoodInput from "./Components/FoodInput";
import FoodItem from "./Components/FoodItem";

const Props = () => {
  // let foodItem = ["sabzi", "cheese", " preserves", "sugar"];

  const [textToShow, settextMethod] = useState("");
  let [foodItem, setFoodItem] = useState([]);
  // let [foodItem, setFoodItem] = useState(["salad", "cheese", " preserves"]);
  // console.log(`current value of textState :${textToShow}`);
  //   let foodItem = [];
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFOodItem = event.target.value;
      let newItems = [...foodItem, newFOodItem];
      setFoodItem(newItems);
      console.log(` food value is entered: ${newFOodItem}`);
    }
    // console.log(event);
    // settextMethod(event.target.value);
  };
  return (
    <div className="border w-75">
      <h1>Healthy food</h1>
      <FoodInput handleOnKeyDown={onKeyDown} />

      <p>{textToShow}</p>
      <FoodItem items={foodItem} />
      <ErrorMsg items={foodItem} />
      <Container />
    </div>
  );
};

export default Props;
