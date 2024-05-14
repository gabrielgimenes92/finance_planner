import React, { useEffect, useState } from 'react';
import styles from '../page.module.scss';

const Summary = (props) => {
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    total: 0,
  });

  useEffect(() => {
    console.log('updated');
    updateSummary();
  }, []);

  const updateSummary = () => {
    let incomeTemp = 0;
    let expenseTemp = 0;
    props.entryList.forEach((element) => {
      if (element.value < 0) {
        expenseTemp += element.value;
      } else {
        incomeTemp += element.value;
      }
    });
    setSummary({
      income: incomeTemp,
      expense: expenseTemp,
      total: incomeTemp + expenseTemp,
    });
  };

  return (
    <div className={styles.summary}>
      <div>
        <h2>Income</h2>
        <p>{summary.income}</p>
      </div>
      <div>
        <h2>Expenses</h2>
        <p>{summary.expense}</p>
      </div>
      <div>
        <h2>Total</h2>
        <p>{summary.total}</p>
      </div>

      <button onClick={updateSummary}>Update value</button>
    </div>
  );
};

export default Summary;
