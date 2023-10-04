import styles from '../styles/SlideBar.module.scss';

import close from '../logo/close.png';
function Items({ show, setShow }) {
  return (
    <div className={styles.SlideBar_Main}>
      <div className={show ? styles.test : ''}>
        {show ? (
          <img onClick={show => setShow(!show)} className={styles.close} src={close} alt="close" />
        ) : (
          ''
        )}
      </div>

      <div>
        <div className={styles.Text_main}>
          <a className={styles.Link} href="#popular">
            <li className={styles.Text}>Popular</li>
          </a>
          <a className={styles.Link} href="#Movie">
            {' '}
            <li className={styles.Text}>Movie</li>
          </a>
          <a className={styles.Link} href="#Films">
            <li className={styles.Text}>Films</li>
          </a>
          <li className={styles.Text}>My List</li>
        </div>
      </div>
    </div>
  );
}

export default Items;
