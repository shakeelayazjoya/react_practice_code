import { MdAutoDelete } from "react-icons/md";
import React from "react";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  //   let todoName = "Buy Milk";
  //   let todoDate = "4/10/2023";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6 mt-2">{todoName}</div>
        <div className="col-4 mt-2">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button mt-2"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
