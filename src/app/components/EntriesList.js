import React from 'react';
import styles from '../page.module.scss';

const EntriesList = (props) => {
  return (
    <div className={styles.entryList}>
      <div className={styles.tableHead}>
        <ul>
          <li>Date</li>
          <li>Description</li>
          <li>Category</li>
          <li>Value</li>
        </ul>
      </div>
      <div className={styles.entry}>
        {props.entryList.map((item) => (
          <ul key={item.id}>
            <li>{item.date}</li>
            <li>{item.description}</li>
            <li>{item.category}</li>
            <li>{item.value}</li>
            <li>
              <button onClick={() => props.handleDelete(item.id)}>
                delete
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default EntriesList;
