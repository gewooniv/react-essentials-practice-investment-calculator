import { formatter } from "../util/investment";

export default function Result({
  year,
  interest,
  valueEndOfYear,
  annualInvestment,
  initialInvestment,
}) {
  const totalInterest =
    valueEndOfYear - annualInvestment * year - initialInvestment;
  const investedCapital = initialInvestment + annualInvestment * year;

  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(investedCapital)}</td>
    </tr>
  );
}
