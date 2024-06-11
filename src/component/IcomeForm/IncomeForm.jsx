import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import style from './IncomeForm.module.css'; // Import the CSS module

const IncomeForm = ({ setWalletBalance }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [income, setIncome] = useState('');

  const handleAddIncome = (e) => {
    e.preventDefault();
    const incomeAmount = parseFloat(income);
    if (isNaN(incomeAmount) || incomeAmount <= 0) {
      enqueueSnackbar('Please enter a valid income amount.', {
        variant: 'error',
      });
      return;
    }
    setWalletBalance((prevBalance) => prevBalance + incomeAmount);
    setIncome('');
    closeSnackbar();
    enqueueSnackbar(`Added income: $${incomeAmount.toFixed(2)}`, {
      variant: 'success',
    });
  };

  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const openIncomeSnackbar = () => {
    closeSnackbar(); // Close any existing snackbar first
    enqueueSnackbar(
      <form onSubmit={handleAddIncome}>
        <h1>Add Balance</h1>
        <div className={style.incomeBox}>
          <input
            type='number'
            onChange={handleChange}
            placeholder="Enter amount"
          />
          <button type="submit" className={style.addBalancebtn} >Add Balance</button>
          <button type="button" className={style.clancebtn} onClick={()=>closeSnackbar()}>
            Cancel
          </button>
        </div>
      </form>,
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
    <div>
      <button onClick={openIncomeSnackbar}>+Add Income</button>
    </div>
  );
};

export default IncomeForm;
