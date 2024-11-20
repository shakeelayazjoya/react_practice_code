import TodoItem from "./TodoItem";
import React from "react";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.date}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
