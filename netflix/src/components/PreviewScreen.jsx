import styles from '../styles/body.module.scss';

import SlideBar from './slidebar';
import name from '../logo/b.png';
import { useState } from 'react';
function PreviewScreen() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.adob}>
      <SlideBar show={show} setShow={setShow} />
      <div className={styles.boy}>
        <div className={show ? styles.photo1 : styles.photo}></div>
      </div>
      <div className={styles.back}></div>

      <div className={show ? styles.Grey_Effect_Changed : styles.Grey_Effect}>
        <img className={show ? styles.name1 : styles.name} src={name} alt="Изображение"></img>
        <h1 className={show ? styles.FilmName1 : styles.FilmName}>Lucifer</h1>
        <p className={show ? styles.info_changed : styles.info}>2016 </p>
        <p className={show ? styles.between_changed : styles.between}>|</p>
        <p className={show ? styles.info1_changed : styles.info1}>16+ </p>
        <p className={show ? styles.between1_changed : styles.between1}>|</p>
        <p className={show ? styles.info2_changed : styles.info2}>6 Seasons </p>
        <p className={show ? styles.Info_Description_Text_Changed : styles.Info_Description_Text}>
          Bored with being the Lord of Hell, the devil relocates to Los Angeles,
          <br />
          where he opens a nightclub and forms a connection with a homicide
          <br />
          detective.
        </p>
      </div>
    </div>
  );
}
export default PreviewScreen;
