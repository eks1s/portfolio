import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.outlet}>
      <header>
        <Navigation />
      </header>

      <Outlet />

      <footer></footer>
    </div>
  );
}

export default Layout;
