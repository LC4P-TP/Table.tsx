import { useState } from "react";
import styles from "./settingsMenu.module.scss";
import { NavigationButton } from "../navigationButton/navigationButton";
import LogoutButton from "../logoutButton/logoutButton";

function Gear() {
  return (
    <div className={styles.gear}>
      <div className={styles.gearInner} />
      {/* // */}
      <div className={styles.gearSpoke} />
      <div className={styles.gearSpoke} />
      <div className={styles.gearSpoke} />
      <div className={styles.gearSpoke} />
      {/* // */}
      <div className={styles.gearSpoke} />
      <div className={styles.gearSpoke} />
      <div className={styles.gearSpoke} />
      <div className={styles.gearSpoke} />
    </div>
  );
}

function SettingsMenu() {
  const [menuState, setMenuState] = useState(true);

  const handleSettingsMenu = () => setMenuState(!menuState);

  return (
    <div className={styles.settingsMenu}>
      <button
        type="button"
        aria-label="settingd"
        className={`mainButtonStyles ${styles.mainButton}`}
        onClick={handleSettingsMenu}
      >
        <Gear />
      </button>

      <div className={`${styles.menu} ${styles.menuShow} ${menuState ? styles.menuHide : ""}`}>
        <div className={styles.settingsMenuBloc}>
          <NavigationButton name="Personal account" customStyle="mainNavigationButton" />
        </div>

        <div className={styles.settingsMenuBloc}>language</div>

        <div className={styles.settingsMenuBloc}>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
export default SettingsMenu;
