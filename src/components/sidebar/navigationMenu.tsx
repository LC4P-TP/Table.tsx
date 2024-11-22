import { useState } from "react";
import NavigationButton from "./navigationButton";
import styles from "./sidebar.module.scss";
import { buttonsAccessMap, buttonsMap, subMenu } from "./buttonsMaps";
import { accessToShow } from "../../auth/RequireAccess";
import { useAppSelector } from "../../redux/store";
import { Access } from "../../redux/mockAPI/loginUserAPI";

function SubMenu({ subMenuBlock }: { subMenuBlock: subMenu }) {
  const [subMenuControl, setSubMenuControl] = useState(false);
  const [[key, value]] = Object.entries(subMenuBlock);

  return (
    <div className={styles.subMenuBox}>
      <button
        type="button"
        className={`mainButtonStyles ${styles.subMenuName}`}
        onClick={() => setSubMenuControl(!subMenuControl)}
      >
        {subMenuControl ? "▲" : "▼"}
        {" "}
        {key}
      </button>
      {subMenuControl ? (
        <div className={styles.SubMenuBlock}>
          {value.map((name) => (
            <NavigationButton key={name} name={name} customStyle="navigationButton" />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MenuBox({ name, access }: { name: string; access: Access }) {
  const [menuControl, setMenuControl] = useState(false);
  const isBlockExist = buttonsMap[name];
  if (!isBlockExist) return null;

  const permissionsByName = buttonsMap[name].map((item) => {
    if (typeof item === "object") {
      const key = Object.keys(item)[0];
      return accessToShow(buttonsAccessMap[key], access);
    }
    return accessToShow(buttonsAccessMap[item], access);
  });

  const generalPermission = permissionsByName.some((val) => val === true);

  if (!generalPermission) {
    return null;
  }

  return (
    <div>
      <button
        type="button"
        className={`mainButtonStyles ${styles.menuNameButton}`}
        onClick={() => setMenuControl(!menuControl)}
      >
        {menuControl ? "▲" : "▼"}
        {" "}
        {name}
      </button>

      {menuControl ? (
        <div className={styles.menuBox}>
          {isBlockExist.map((element, index) => {
            if (typeof element === "object") {
              const key = Object.keys(element)[0];
              if (!accessToShow(buttonsAccessMap[key], access)) {
                return null;
              }
              return <SubMenu key={`submenu-${String(index)}`} subMenuBlock={element} />;
            }

            if (!accessToShow(buttonsAccessMap[element], access)) {
              return null;
            }
            return <NavigationButton key={element} name={element} customStyle="navigationButton" />;
          })}
        </div>
      ) : null}
    </div>
  );
}

function NavigationMenu() {
  const { access } = useAppSelector((state) => state.user);

  return (
    <div className={styles.navigationButtonsWrapper}>
      <MenuBox name="Logistic" access={access} />
      {accessToShow("measurements", access) ? <NavigationButton name="Test page" customStyle="menuNameButton" /> : null}
    </div>
  );
}
export default NavigationMenu;
