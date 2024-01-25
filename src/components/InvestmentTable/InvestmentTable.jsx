import "./InvestmentTable.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function InvestmentTable({ inputsData }) {
  //prettier-ignore
  const investmentResults = calculateInvestmentResults({ ...inputsData });
  //prettier-ignore
  let investedCapital = (inputsData.initialInvestment ? +inputsData.initialInvestment : 0);
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
                investedCapital += inputsData.annualInvestment
                  ? inputsData.annualInvestment
                  : 0;
                totalInterest += +investment.interest;

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
