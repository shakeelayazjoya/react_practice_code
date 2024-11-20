import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WellComeMessage from "./components/WellComeMessage";
import React from "react";
function App() {
  const initailTodoItems = [];
  const [todoItems, setTodoItems] = useState(initailTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added :${itemName} Date :${itemDueDate}`);
    const newTodoItem = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItem);
  };
  const handleDeleteItem = (todoItemName) => {
    console.log(`item deleted :${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WellComeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
