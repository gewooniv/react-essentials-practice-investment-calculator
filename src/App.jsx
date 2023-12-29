import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 3,
  });

  function handleChangeInput(inputType, input) {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [inputType]: +input,
      };
    });
    // console.log(inputType, input);
  }

  return (
    <>
      <Header />
      <Calculator onChange={handleChangeInput} input={value} />
      <Results input={value} />
    </>
  );
}

export default App;
