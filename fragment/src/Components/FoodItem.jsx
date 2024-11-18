import React, { useState } from "react";
import Item from "./Item";

const FoodItem = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]); // Keeps track of bought items

  const onBuyButton = (item) => {
    // Add the item to the activeItems array if not already present
    if (!activeItems.includes(item)) {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item
            key={index}
            foodItem={item}
            isBought={activeItems.includes(item)} // Pass whether the item is bought
            handleBuyButton={() => onBuyButton(item)} // Handle button click
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItem;
