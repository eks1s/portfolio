import classNames from 'classnames';
import { useState } from 'react';
import Headers from '../Headers/Headers';
import ToggleThemeSwitch from '../ToggleThemeSwitch/ToggleThemeSwitch';
import styles from './Navigation.module.scss';

function Navigation() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleClickMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.leftSide}>
        <Headers type={Headers.Type.H1}>Anton</Headers>
        <p className={styles.lastName}>Spiridonov</p>
      </div>

      <div className={styles.rightSide}>
        <ToggleThemeSwitch />
        <div className={styles.btnContainer}>
          <button
            onClick={toggleClickMenu}
            className={classNames(styles.menuBtn, isActive && styles.isActive)}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
          >
            <span className={styles.menuBtnBlock}>
              <span className={styles.menuBtnInner}></span>
            </span>
          </button>
        </div>
      </div>
      {isActive && (
        <div className={classNames(styles.menu, isActive && styles.active)}>
          <Headers className={styles.menuHeader} type={Headers.Type.H2}>
            Main
          </Headers>
          <Headers className={styles.menuHeader} type={Headers.Type.H2}>
            About
          </Headers>
          <Headers className={styles.menuHeader} type={Headers.Type.H2}>
            Components
          </Headers>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
