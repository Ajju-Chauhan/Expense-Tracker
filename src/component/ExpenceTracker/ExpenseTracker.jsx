import style from "./ExpenseTracker.module.css";
import ExpenseSummary from "../ExpenseSummary/ExpenseSummary.jsx";
import { useState, useEffect } from "react";
import IncomeForm from "../IcomeForm/IncomeForm.jsx";
import ExpenseForm from "../Expenses/ExpensForm.jsx";
import ExpenseList from "../ExpenseList/ExpenseList.jsx";
import ExpenseTrends from "../ExpenseTrends/ExpenseTrends.jsx";

function ExpenseTracker() {
  const [walletBalance, setWalletBalance] = useState(4500);
  const [expenses, setExpenses] = useState([
    { title: "3", amount: 3, category: "3", date: "2024-06-19" },
    { title: "this is fom ", amount: 56, category: "45", date: "2024-07-19" },
    { title: "3", amount: 3, category: "98", date: "2024-06-19" },
    { title: "3", amount: 3, category: "aajay", date: "2024-06-19" },
    { title: "3", amount: 3, category: "ragyk", date: "2024-06-19" },
  ]);

  useEffect(() => {
    const savedWalletBalance = localStorage.getItem("walletBalance");
    const savedExpenses = localStorage.getItem("expenses");
    if (savedWalletBalance) setWalletBalance(JSON.parse(savedWalletBalance));
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem("walletBalance", JSON.stringify(walletBalance));
  }, [walletBalance]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <>
      <div className={style.ExpenceTracker}>
        <div className={style.income}>
          <h2>Wallet Balance: ${walletBalance}</h2>
          <IncomeForm setWalletBalance={setWalletBalance} />
        </div>
        <div className={style.income}>
          <h2>Expenses : $500</h2>
          <ExpenseForm
            walletBalance={walletBalance}
            setWalletBalance={setWalletBalance}
            expenses={expenses}
            setExpenses={setExpenses}
          />
        </div>
        <div className={style.income}>
          <ExpenseSummary expenses={expenses} />
        </div>
      </div>

      <div className={style.summarydiv}>
        <div className={style.ExpenseList}>
          <ExpenseList
            expenses={expenses}
            setExpenses={setExpenses}
            setWalletBalance={setWalletBalance}
          />
        </div>
        <div className={style.ExpenseTrends}>
          <h2>Expense Trends</h2>
          <ExpenseTrends expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default ExpenseTracker;
