const FoodInput = ({ handleOnKeyDown }) => {
  //   const handleOnChange = (event) => {
  //     console.log(event.target.value);
  // Call your function here to add the new item to the list.
  //   };
  return (
    <div>
      <input
        type="text"
        className="p-2 m-3"
        placeholder="input here"
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
};

export default FoodInput;
