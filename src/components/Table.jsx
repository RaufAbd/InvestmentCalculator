import { calculateInvestmentResults, formatter } from "./../util/investment.js";

const properties = [
  {
    title: "Year",
    key: "year",
  },
  {
    title: "Investment Value",
    key: "valueEndOfYear",
  },
  {
    title: "Interest (Year)",
    key: "interest",
  },
  {
    title: "Total Interest",
    key: "totalInterest",
  },
  {
    title: "Invested capital",
    key: "annualInvestment",
  },
];

export default function Table({ resultData }) {
  const calculatedData = calculateInvestmentResults(resultData);
  // const initialInvestment =
  //   resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          {properties.map(({ title, key }) => (
            <th key={key}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {calculatedData.map((data, i) => {
          // const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment

          return (
            <tr key={i}>
              {properties.map(({ key }) => (
                <td key={key}>
                  {key !== "year" ? formatter.format(data[key]) : data[key]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
