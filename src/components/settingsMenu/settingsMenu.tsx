import { useState } from "react";
import styles from "./settingsMenu.module.scss";
import LogoutButton from "../buttons/logoutButton/logoutButton";
import LanguageSwitcher from "../languageSwitcher/languageSwitcher";
import PedsonalAccountButtton from "../buttons/persAccountButton/persAccountButton";

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
          <PedsonalAccountButtton />
        </div>

        <div className={styles.settingsMenuBloc}>
          <LanguageSwitcher />
        </div>

        <div className={styles.settingsMenuBloc}>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
export default SettingsMenu;
