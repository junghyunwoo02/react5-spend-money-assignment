import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import fakeData from "./fakeData.json";

const App = () => {
  const [expenseData, setExpenseData] = useState(() => {
    const savedData = localStorage.getItem("expenseData");
    return savedData ? JSON.parse(savedData) : fakeData;
  });

  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }, [expenseData]);

  return (
    <div>
      <GlobalStyle />
      <Router expenseData={expenseData} setExpenseData={setExpenseData} />
    </div>
  );
};

export default App;
