import Input from "./Input";

export default function Calculator({ onChange, input }) {
  return (
    <>
      <section id="user-input">
        <Input
          label="Initial investment"
          inputType="initialInvestment"
          initialValue={input.initialInvestment}
          onChange={onChange}
        />
        <Input
          label="Annual investment"
          inputType="annualInvestment"
          initialValue={input.annualInvestment}
          onChange={onChange}
        />
        <Input
          label="Expected Return"
          inputType="expectedReturn"
          initialValue={input.expectedReturn}
          onChange={onChange}
        />
        <Input
          label="Duration"
          inputType="duration"
          initialValue={input.duration}
          onChange={onChange}
        />
      </section>
    </>
  );
}
