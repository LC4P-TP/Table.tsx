import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import { useAppDispatch } from "../../redux/store";
import NavigationHead from "./navigationHead";
import NavigationMenu from "./navigationMenu";
import { logout } from "../../redux/slices/UserSlice/userSlice";

function Sidebar(): React.ReactElement {
  const dispatch = useAppDispatch();

  const [sidebsrState, setSidebarState] = useState(true);

  const handleSideBar = () => setSidebarState(!sidebsrState);

  const handleLoout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.sidebarWrapper}>
      <button
        type="button"
        className={`${styles.blackBackground} ${sidebsrState ? styles.blackBackgroundHide : ""}`}
        onClick={handleSideBar}
        aria-label="blackBackground"
      />

      <button type="button" className={`mainButtonStyles ${styles.mainButton}`} onClick={handleSideBar}>
        ☰
      </button>

      <div className={`${styles.sidebar} ${styles.sidebarShow} ${sidebsrState ? styles.sidebarHide : ""}`}>
        <div className={styles.head}>
          <NavigationHead />
        </div>

        <div className={styles.body}>
          <NavigationMenu />
        </div>

        <div className={styles.foot}>
          <button type="submit" className={`mainButtonStyles ${styles.logout}`} onClick={handleLoout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
