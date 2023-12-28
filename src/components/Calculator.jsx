import Input from "./Input";
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState({
    initialInvestment: "1000",
  });

  function handleChangeInput(inputType, input) {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [inputType]: input,
      };
    });
    // console.log(value);
  }

  return (
    <section id="user-input">
      <Input
        label="Initial investment"
        inputType="initialInvestment"
        initialValue="1000"
        onChangeInput={handleChangeInput}
      />
    </section>
  );
}
