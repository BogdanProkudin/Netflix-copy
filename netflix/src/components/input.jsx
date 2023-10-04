import styles from '../styles/styles.module.scss';
import searchLogo from '../logo/1.png';
function InputHeader() {
  return (
    <div className={styles.HeaderInputMain}>
      <input className={styles.InputHeader} placeholder="I`m searching for..." />
      <img className={styles.searchLogo} src={searchLogo} alt="searchlogo" />
    </div>
  );
}
export default InputHeader;
