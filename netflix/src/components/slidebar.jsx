import styles from '../styles/SlideBar.module.scss';
import bar from '../logo/bar.png';
import { useSpring, animated } from 'react-spring';

import Items from './items';
function SlideBar({ show, setShow }) {
  const { left } = useSpring({
    from: { left: '-100%' },
    left: show ? '0' : '-100%'
  });

  return (
    <div className={styles.f}>
      {console.log(show)}
      <div className={show ? styles.active_Slidebar : ''}>
        {show === false ? (
          <img onClick={() => setShow(show => !show)} className={styles.Bar} src={bar} alt="bar" />
        ) : (
          ''
        )}
      </div>
      <animated.div style={{ left: left, display: !show && 'none' }} className={styles.BackGround}>
        <Items show={show} setShow={setShow} />
      </animated.div>
    </div>
  );
}

export default SlideBar;
