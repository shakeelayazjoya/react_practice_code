import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WellComeMessage from "./components/WellComeMessage";
import { todoItemsContext } from "./store/todoItemsStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]); // Use state to track todo items

  // Add a new item
  const addItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName}, Date: ${itemDueDate}`);
    const newTodoItem = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItem); // Update state with new item
  };

  // Delete an item
  const deleteItem = (todoItemName) => {
    console.log(`Item deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems); // Update state after deletion
  };

  return (
    <todoItemsContext.Provider
      value={{
        items: todoItems, // Provide the current list of todo items
        addNewItem: addItem, // Function to add a new item
        deleteItem: deleteItem, // Function to delete an item
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={addItem} /> {/* Use the addItem function here */}
        <WellComeMessage />
        <TodoItems todoItems={todoItems} onDeleteClick={deleteItem} />{" "}
        {/* Pass deleteItem for deleting todo */}
      </center>
    </todoItemsContext.Provider>
  );
}

export default App;
