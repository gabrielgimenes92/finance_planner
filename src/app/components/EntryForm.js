import React from 'react';
import styles from '../page.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { formatedCurrentDate } from '../utils/dateUtils';

const EntryForm = (props) => {
  return (
    <div className={styles.openModal}>
      <div className={styles.overlay} onClick={props.toggleAddModal} />
      <div className={styles.formWrapper}>
        <div className={styles.titleWrapper}>
          <h2>New Entry</h2>
          <div className={styles.closeButton}>
            <FontAwesomeIcon icon={faX} onClick={props.toggleAddModal} />
          </div>
        </div>
        <form onSubmit={props.onSubmit} className={styles.form}>
          <label>
            Date:
            <input
              type="date"
              name="date"
              onChange={props.handleChange}
              defaultValue={`${formatedCurrentDate()}`}
            />
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
          <div className={styles.horizontalButtons}>
            <button onClick={props.toggleAddModal}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntryForm;
