import Result from "./Result";
import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest</th>
          <th>Value End Of Year</th>
          <th>Annual Investment</th>
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
