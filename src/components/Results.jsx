import Result from "./Result";
import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest</th>
          <th>Total interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((result) => (
          <Result key={result.year} {...result} />
        ))}
      </tbody>
    </table>
  );
}
