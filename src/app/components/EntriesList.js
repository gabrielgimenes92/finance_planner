import React from 'react';
import styles from '../page.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faTrashCan,
  faX,
} from '@fortawesome/free-solid-svg-icons';

const EntriesList = (props) => {
  return (
    <div className={styles.entryList}>
      <div className={styles.tableHead}>
        <ul>
          <li>Date</li>
          <li>Description</li>
          <li>Category</li>
          <li>Value</li>
          <li>Actions</li>
        </ul>
      </div>
      <div className={styles.entry}>
        {props.filteredEntryList.map((item) => (
          <ul key={item.id}>
            <li>
              {item.date.toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </li>
            <li>{item.description}</li>
            <li>{item.category}</li>
            <li>{item.value}</li>
            <li>
              <FontAwesomeIcon
                className={styles.editButton}
                icon={faPenToSquare}
                // onClick={() => props.handleDelete(item.id)}
              />
              <FontAwesomeIcon
                className={styles.deleteButton}
                icon={faTrashCan}
                onClick={() => props.handleDelete(item.id)}
              />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default EntriesList;
