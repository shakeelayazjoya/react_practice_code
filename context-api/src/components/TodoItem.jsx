import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext); // Access removeTodo function

  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
