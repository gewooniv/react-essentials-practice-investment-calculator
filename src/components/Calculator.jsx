import Input from "./Input";
import Results from "./Results";
import { calculateInvestmentResults } from "../util/investment.js";
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState({
    initialInvestment: "1000",
    annualInvestment: "10000",
    expectedReturn: "120000",
    duration: "12",
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

  const investmentResult = calculateInvestmentResults(value);

  return (
    <>
      <section id="user-input">
        <Input
          label="Initial investment"
          inputType="initialInvestment"
          initialValue="10000"
          onChangeInput={handleChangeInput}
        />
        <Input
          label="Annual investment"
          inputType="annualInvestment"
          initialValue="1000"
          onChangeInput={handleChangeInput}
        />
        <Input
          label="Expected Return"
          inputType="expectedReturn"
          initialValue="120000"
          onChangeInput={handleChangeInput}
        />
        <Input
          label="Duration"
          inputType="duration"
          initialValue="12"
          onChangeInput={handleChangeInput}
        />
      </section>
      <section id="result">
        <Results annualData={investmentResult} />
      </section>
    </>
  );
}
