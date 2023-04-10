import { Link } from 'react-router-dom';
import Headers from '../Headers/Headers';
import ToggleThemeSwitch from '../ToggleThemeSwitch/ToggleThemeSwitch';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.leftSide}>
        <Headers type={Headers.Type.H1}>Anton</Headers>
        <p className={styles.lastName}>Spiridonov</p>
      </div>

      <div className={styles.rightSide}>
        <ToggleThemeSwitch />
      </div>
    </nav>
  );
}

export default Navigation;
