import React from 'react';
import styles from '../page.module.scss';

const Summary = (props) => {
  return (
    <div className={styles.summary}>
      <div>
        <h2>Income</h2>
        <p>{props.summary.income.toFixed(2)}</p>
      </div>
      <div>
        <h2>Expenses</h2>
        <p>{props.summary.expense.toFixed(2)}</p>
      </div>
      <div>
        <h2>Total</h2>
        <p>{props.summary.total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Summary;
