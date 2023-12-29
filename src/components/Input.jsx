export default function Input({ label, inputType, initialValue, onChange }) {
  return (
    <div id="input-group">
      <p>
        <label>{label}</label>
        <input
          type="number"
          onChange={(event) => onChange(inputType, event.target.value)}
          value={initialValue}
          required
        />
      </p>
    </div>
  );
}
