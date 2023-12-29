export default function Result({
  year,
  interest,
  valueEndOfYear,
  annualInvestment,
}) {
  return (
    <li>
      <div>{year}</div>
      <div>{interest}</div>
      <div>{valueEndOfYear}</div>
      <div>{annualInvestment}</div>
    </li>
  );
}
