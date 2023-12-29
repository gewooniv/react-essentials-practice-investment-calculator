import Result from "./Result";

export default function Results({ resultData }) {
  return (
    <section id="result">
      <ol>
        {resultData.map((result) => (
          <Result key={result.year} {...result} />
        ))}
      </ol>
    </section>
  );
}
