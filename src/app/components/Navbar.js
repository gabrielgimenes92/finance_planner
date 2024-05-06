import React from 'react';
import styles from '../page.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbarWrapper}>
        <img src="https://picsum.photos/200" alt="" />
        <ul className={styles.navbar}>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <a>
            <FontAwesomeIcon icon={faBurger} />
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
