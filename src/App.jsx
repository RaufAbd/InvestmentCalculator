import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const initialData = {
    year: 0,
    interest: 0,
    valueEndOfYear: 0,
    annualInvestment: 0,
  };

  const [formData, setFormData] = useState(initialData);
  const isInputValid = formData.duration >= 1;

  function handleData(value, inputName) {
    setFormData((prev) => ({ ...prev, [inputName]: value }));
  }

  return (
    <>
      <Header />
      <Calculator onInput={handleData} />
      {isInputValid ? (
        <Table resultData={formData} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
