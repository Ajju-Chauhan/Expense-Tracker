// src/components/CustomSnackbar.js
import React from 'react';
import style from './Expenses.module.css';

const CustomSnackbar = ({ handleSubmit, handleCancel, title, setTitle, amount, setAmount, category, setCategory, date, setDate }) => (
  <form onSubmit={handleSubmit}>
    <h2>Add Expense</h2>
    <div className={style.formdiv}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Add Expense</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </div>
  </form>
);

export default CustomSnackbar;
