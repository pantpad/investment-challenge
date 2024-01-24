import InvestmentInputs from "./components/InvestmentInputs/InvestmentInputs";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";
import { useState } from "react";
const initialInputs = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

function areInputsComplete(object) {
  let areAllTyped = Object.entries(object).every(([key, value]) => {
    return value !== "";
  });
  return areAllTyped;
}

function returnNumObject(object) {
  const numericObject = {};
  Object.entries(object).map(([key, value]) => {
    numericObject[key] = +value;
  });
  return numericObject;
}

function App() {
  const [inputsData, setInputsData] = useState(initialInputs);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputsData((prevInputs) => {
      return { ...prevInputs, [name]: +value };
    });
  }

  return (
    <main>
      <InvestmentInputs
        inputsData={inputsData}
        handleInputChange={handleInputChange}
      />
      <InvestmentTable
        inputsData={
          areInputsComplete(inputsData)
            ? inputsData
            : returnNumObject(inputsData)
        }
      />
    </main>
  );
}

export default App;
