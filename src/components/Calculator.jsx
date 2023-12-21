import Input from "./Input";

export default function Calculator() {
  return (
    <div id="user-input">
      <Input label="Initial investment" />
      <Input label="Annual investment" />
      <Input label="Expected return" />
      <Input label="Duration" />
    </div>
  );
}
