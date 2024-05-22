import React from 'react';
import styles from '../page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = (props) => {
  return (
    <div className={styles.addFloatingButton} onClick={props.toggleAddModal}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default AddButton;
