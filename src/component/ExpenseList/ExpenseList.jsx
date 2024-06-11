// src/components/ExpenseList.js
import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import style from "./ExpenseList.module.css"

const ExpenseList = ({ expenses, setExpenses, setWalletBalance }) => {
  const handleDelete = (index) => {
    const expenseToDelete = expenses[index];
    setExpenses(expenses.filter((_, i) => i !== index));
    setWalletBalance((prevBalance) => prevBalance + expenseToDelete.amount);
  };

  return (
    <div className={style.Listdiv}>
      <h2>Recent Transaction</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.title} 
             {expense.date}

            <div >
            ${expense.amount}
            <MdDelete onClick={() => handleDelete(index)} className={style.rightDiv} />
            <MdEdit className={style.rightDiv} />
           
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
