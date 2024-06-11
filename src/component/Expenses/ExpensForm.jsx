// src/components/ExpenseForm.js
import style from './Expenses.module.css';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import CustomSnackbar from './CustomSnackbar';

const ExpenseForm = ({ walletBalance, setWalletBalance, expenses, setExpenses }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseAmount = parseFloat(amount);
    if (expenseAmount > walletBalance) {
      enqueueSnackbar('Insufficient wallet balance!', { variant: 'error' });
      return;
    }
    const newExpense = { title, amount: expenseAmount, category, date };
    setExpenses([...expenses, newExpense]);
    setWalletBalance(walletBalance - expenseAmount);
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
    closeSnackbar();
  };

  const handleCancel = () => {
    closeSnackbar();
  };

  const handleAddExpenseClick = () => {
    enqueueSnackbar(
      <CustomSnackbar
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        date={date}
        setDate={setDate}
      />,
      {
        persist: true,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      }
    );
  };

  return (
    <button onClick={handleAddExpenseClick}>Add Expense</button>
  );
};

export default ExpenseForm;
