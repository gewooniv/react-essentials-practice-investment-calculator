import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Results from "./components/Results";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [value, setValue] = useState({
    initialInvestment: "1000",
    annualInvestment: "10000",
    expectedReturn: "120000",
    duration: "3",
  });

  function handleChangeInput(inputType, input) {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [inputType]: input,
      };
    });
    // console.log(inputType, input);
  }

  return (
    <>
      <Header />
      <Calculator onChange={handleChangeInput} input={value} />
      <Results resultData={calculateInvestmentResults(value)} />
    </>
  );
}

export default App;
