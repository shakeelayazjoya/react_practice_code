import React, { useContext } from "react";
import { todoItemsContext } from "../store/todoItemsStore";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { items, deleteItem } = useContext(todoItemsContext); // Access items and deleteItem from context

  return (
    <div className="items-container">
      {items.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.date}
          todoName={item.name}
          onDeleteClick={() => deleteItem(item.name)} // Use deleteItem from context
        />
      ))}
    </div>
  );
};

export default TodoItems;
