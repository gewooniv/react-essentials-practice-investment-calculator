import calculatorLogo from "../../public/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={calculatorLogo} alt="Investment-calculator-logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
