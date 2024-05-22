import React from 'react';
import styles from '../page.module.scss';

const EntryForm = (props) => {
  return (
    <div className={styles.openModal}>
      <div className={styles.overlay} onClick={props.toggleAddModal} />
      <div className={styles.formWrapper}>
        <form onSubmit={props.onSubmit} className={styles.form}>
          <label>
            Date:
            <input type="date" name="date" onChange={props.handleChange} />
          </label>
          <label>
            Description:
            <input
              type="text"
              id="description"
              name="description"
              onChange={props.handleChange}
            />
          </label>
          <label>
            Category:
            <select onChange={props.handleChange}>
              <option value="Groceries">Groceries</option>
              <option value="Salary">Salary</option>
              <option value="Monthly Basic">Monthly Basic</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Value:
            <input
              type="text"
              id="value"
              name="value"
              onChange={props.handleChange}
            />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default EntryForm;
