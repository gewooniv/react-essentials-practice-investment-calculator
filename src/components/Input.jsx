import { useState } from "react";

export default function Input({ initialValue, label }) {
  const [input, setInput] = useState(initialValue);

  function handleChange(event) {
    setInput(event.target.value);
    // console.log(input);
  }

  return (
    <div id="input-group">
      <p>
        <label>{label}</label>
        <input type="number" onChange={handleChange} required value={input} />
      </p>
    </div>
  );
}
