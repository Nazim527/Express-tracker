import React, { useState, useEffect } from "react";
import "./App.css";
import Balance from "./components/balance/balance";
import History from "./components/History/history";
import Transaction from "./components/transaction/transaction";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    const { text, amount } = transaction;
    setTransactions([...transactions, transaction]);
    if (text !== "") {
      if (amount > 0) {
        setIncome(income + amount);
      } else {
        setExpense(expense + Math.abs(amount));
      }
      setBalance(balance + amount);
    } else {
      alert("Bir ad girmeniz xahis olunur");
    }
  };

  const deleteTransaction = (id) => {
    const updateTransactions = transactions.filter(
      (transaction, index) => id !== index
    );
    setTransactions(updateTransactions);
  };

  useEffect(() => {
    let newIncome = 0;
    let newExpense = 0;

    transactions.forEach((transaction) => {
      if (transaction.text !== "") {
        if (transaction.amount < 0) {
          newExpense += Math.abs(transaction.amount);
        } else {
          newIncome += transaction.amount;
        }
      } else {
        null
      }
    });

    setIncome(newIncome);
    setExpense(newExpense);

    const newTotalBalance = newIncome - newExpense;
    setBalance(newTotalBalance);
  }, [transactions]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance balance={balance} income={income} expense={expense} />
      <History
        deleteTransaction={deleteTransaction}
        transactions={transactions}
      />
      <Transaction addTransaction={addTransaction} />
    </div>
  );
};

export default App;
