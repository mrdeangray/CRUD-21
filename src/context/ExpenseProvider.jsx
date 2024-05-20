import React, { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext(null);

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses =
      JSON.parse(localStorage.getItem("crud-21-expenses")) || [];
    setExpenses(savedExpenses);
  }, []);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
