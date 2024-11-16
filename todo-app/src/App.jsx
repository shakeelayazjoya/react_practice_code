import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "4/10/2023",
    },
    {
      name: "Go to college",
      date: "4/10/2023",
    },

    {
      name: "Buy eggs",
      date: "4/10/2023",
    },
    // Add more todo items here...
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
