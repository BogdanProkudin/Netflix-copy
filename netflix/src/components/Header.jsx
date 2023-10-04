import styles from '../styles/styles.module.scss';
import photo from '../logo/2.svg';
import InputHeader from './input';
import bell from '../logo/bell.png';
import luc from '../logo/luc.png';
import { useState } from 'react';
function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.flex}>
        <img className={styles.logo} src={photo} />
        <InputHeader />
      </div>
      <div className={styles.HeaderWrapper}>
        <img className={styles.bell} src={bell} />
        <img className={styles.lucifer} src={luc} />
      </div>
    </div>
  );
}
export default Header;
