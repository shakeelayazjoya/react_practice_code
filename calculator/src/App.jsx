import Display from "./assets/components/Display";
import ButtonsContainer from "./assets/components/ButtonsContainer";

import "./App.css";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(String(result));
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <div className="calculator">
      <Display displaValue={calValue} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
