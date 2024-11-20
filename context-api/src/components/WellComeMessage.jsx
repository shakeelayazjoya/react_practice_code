import { useContext } from "react";
import { todoItemsContext } from "../store/todoItemsStore";

const WellComeMessage = () => {
  const todoItems = useContext(todoItemsContext); // Access the context value

  return <div>{todoItems.length === 0 && <h1>Enjoy Your Day</h1>}</div>;
};

export default WellComeMessage;
