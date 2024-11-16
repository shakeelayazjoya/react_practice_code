import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoDate={item.date} todoName={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;
