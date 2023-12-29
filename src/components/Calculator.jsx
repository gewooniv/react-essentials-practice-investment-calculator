import Input from "./Input";

export default function Calculator({ onChange, input }) {
  return (
    <>
      <section id="user-input">
        <div id="input-group">
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
        </div>
        <div id="input-group">
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
        </div>
      </section>
    </>
  );
}
