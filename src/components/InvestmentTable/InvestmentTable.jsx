import "./InvestmentTable.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";

function returnNumObject(object) {
  const numericObject = {};
  Object.entries(object).map(([key, value]) => {
    numericObject[key] = +value;
  });
  return numericObject;
}

export default function InvestmentTable({ inputsData }) {
  //prettier-ignore
  const investmentResults = calculateInvestmentResults(returnNumObject({ ...inputsData }));
  //prettier-ignore
  let investedCapital = +inputsData.initialInvestment;
  let totalInterest = 0;

  return (
    <>
      <div className="table-container">
        {investmentResults.length < 1 ? (
          <p>Please enter a duration greater than zero!</p>
        ) : (
          <table>
            <caption>Calculated Investment</caption>
            <thead>
              <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {investmentResults.map((investment) => {
                investedCapital += inputsData.annualInvestment;
                totalInterest += +investment.interest;
                console.log(investment);

                return (
                  <tr key={investment.year}>
                    <td>{investment.year}</td>
                    <td>{formatter.format(investment.valueEndOfYear)}</td>
                    <td>{formatter.format(investment.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(investedCapital)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
