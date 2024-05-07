import React from 'react';
import styles from '../page.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbarWrapper}>
        <img src="https://picsum.photos/48" alt="" className={styles.logo} />
        <ul className={styles.navbar}>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
        <div className={styles.space}></div>
        <ul className={styles.socialLinks}>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
