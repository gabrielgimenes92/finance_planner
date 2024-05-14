import React from 'react';
import styles from '../page.module.scss';

const AddButton = (props) => {
  return (
    <div className={styles.addFloatingButton} onClick={props.toggleAddModal}>
      +
    </div>
  );
};

export default AddButton;
