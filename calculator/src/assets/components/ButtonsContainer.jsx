// import styles from "../components/ButtonContainer.module.css"; // Correctly import the CSS module

const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className="buttonsContainer">
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className="button">
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
