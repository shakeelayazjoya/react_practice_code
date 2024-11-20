import { useRef } from "react";
import { IoBagAddSharp } from "react-icons/io5";
import React from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    dueDateElement.current.value = "";
    todoNameElement.current.value = "";

    console.log(`${todoName} due to ${dueDate}`);
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoBagAddSharp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
