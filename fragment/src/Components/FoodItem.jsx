// FoodItem.js
// import React from "react";
import Item from "./Item";

const FoodItem = ({ items }) => {
  return (
    <div>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item key={index} foodItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default FoodItem;
