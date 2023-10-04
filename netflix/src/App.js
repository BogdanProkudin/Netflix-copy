import styles from './styles/styles.module.scss';
import Header from './components/Header';
import Home from './components/Page/Home';
import { store } from './redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className={styles.cen}>
        <div className={styles.background}>
          <div className={styles.contain}>
            <Home />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
