import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext); // Access addTodo function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo({ id: Date.now(), text }); // Add new todo with unique ID
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
