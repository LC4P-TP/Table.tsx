import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./sidebar.module.scss";
import NavigationHead from "./navigationHead";
import NavigationMenu from "./navigationMenu";

function Sidebar(): React.ReactElement {
  const { t } = useTranslation();

  const [sidebsrState, setSidebarState] = useState(true);

  const handleSideBar = () => setSidebarState(!sidebsrState);

  return (
    <div className={styles.sidebarWrapper}>
      <button
        type="button"
        className={`${styles.blackBackground} ${sidebsrState ? styles.blackBackgroundHide : ""}`}
        onClick={handleSideBar}
        aria-label="blackBackground"
      />

      <button type="button" className={`mainButtonStyles ${styles.mainButton}`} onClick={handleSideBar}>
        {t("Menu")}
      </button>

      <div className={`${styles.sidebar} ${styles.sidebarShow} ${sidebsrState ? styles.sidebarHide : ""}`}>
        <div className={styles.head}>
          <NavigationHead />
        </div>

        <div className={styles.body}>
          <NavigationMenu />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
