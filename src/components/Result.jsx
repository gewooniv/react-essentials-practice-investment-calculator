export default function Result({
  year,
  interest,
  valueEndOfYear,
  annualInvestment,
}) {
  return (
    <li>
      <p>{year}</p>
      <p>{interest}</p>
      <p>{valueEndOfYear}</p>
      <p>{annualInvestment}</p>
    </li>
  );
}
