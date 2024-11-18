import React from "react";

const Item = ({ foodItem, isBought, handleBuyButton }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        isBought ? "bg-success text-white" : ""
      }`}
    >
      <span>{foodItem}</span>
      <button className="btn btn-warning" onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;
