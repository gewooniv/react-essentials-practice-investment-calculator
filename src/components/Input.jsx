export default function Input({ label, inputType, initialValue, onChange }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        onChange={(event) => onChange(inputType, event.target.value)}
        value={initialValue}
        required
      />
    </p>
  );
}
