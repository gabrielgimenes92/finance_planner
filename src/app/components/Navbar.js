import React from 'react';
import styles from '../page.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import profilePicture from "../dummy/profilePicture.jpg";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbarWrapper}>
        <Image src={profilePicture} className={styles.logo}
              height={48}
              width={48}/>
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
