import React from 'react';
import styles from '../page.module.scss';

const Summary = (props) => {
  return (
    <div className={styles.summary}>
      <div>
        <h2>Income</h2>
        <p>{props.summary.income}</p>
      </div>
      <div>
        <h2>Expenses</h2>
        <p>{props.summary.expense}</p>
      </div>
      <div>
        <h2>Total</h2>
        <p>{props.summary.total}</p>
      </div>

      <button onClick={props.updateSummary}>Update value</button>
    </div>
  );
};

export default Summary;
