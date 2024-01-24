import "./InvestmentInputs.css";

export default function InvestmentInputs({ inputsData, handleInputChange }) {
  return (
    <>
      <div className="inputs-container">
        <div className="inputs">
          <div className="input">
            <label htmlFor="initial-investment">Initial Investment</label>
            <input
              type="number"
              name="initialInvestment"
              id="initial-investment"
              value={inputsData.initialInvestment}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="input">
            <label htmlFor="annual-investment">Annual Investment</label>
            <input
              type="number"
              name="annualInvestment"
              id="annual-investment"
              value={inputsData.annualInvestment}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="input">
            <label htmlFor="expected-return">Expected Return</label>
            <input
              type="number"
              name="expectedReturn"
              id="expected-return"
              value={inputsData.expectedReturn}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="input">
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              name="duration"
              id="duration"
              min={0}
              max={30}
              value={inputsData.duration}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
