import InvestmentInputs from "./components/InvestmentInputs/InvestmentInputs";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";
import { useState } from "react";
const initialInputs = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

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
      <InvestmentTable inputsData={inputsData} />
    </main>
  );
}

export default App;
