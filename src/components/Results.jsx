import Result from "./Result";

export default function Results({ annualData }) {
  // console.log({ ...annualData[0] });

  return (
    <ol>
      <Result {...annualData[0]} />
      <Result {...annualData[1]} />
      <Result {...annualData[3]} />
    </ol>
  );
}
