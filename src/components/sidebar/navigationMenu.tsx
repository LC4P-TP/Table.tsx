import { useState } from "react";
import NavigationButton from "./navigationButton";
import styles from "./sidebar.module.scss";

interface subMenu {
  [key: string]: string[];
}

type block = string | subMenu;

const nameMap: Record<string, block[]> = {
  Logistic: ["Inbound supplies", "asuuiahsdug", { "Logistic settings": ["Home"] }],
};

function MenuBlock({ subMenuBlock }: { subMenuBlock: subMenu }) {
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
        {key}
      </button>
      {subMenuControl ? (
        <div>
          {value.map((name) => (
            <NavigationButton key={name} name={name} customStyle="navigationButton" />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MenuBox({ name }: { name: string }) {
  const [menuControl, setMenuControl] = useState(false);
  const isBlockExist = nameMap[name];
  if (!isBlockExist) return null;

  return (
    <div>
      <button
        type="button"
        className={`mainButtonStyles ${styles.menuNameButton}`}
        onClick={() => setMenuControl(!menuControl)}
      >
        {menuControl ? "▲" : "▼"} {name}
      </button>

      {menuControl ? (
        <div className={styles.menuBox}>
          {isBlockExist.map((element, index) => {
            if (typeof element === "object") {
              return <MenuBlock key={`submenu-${String(index)}`} subMenuBlock={element} />;
            }
            return <NavigationButton key={element} name={element} customStyle="navigationButton" />;
          })}
        </div>
      ) : null}
    </div>
  );
}

function NavigationMenu() {
  return (
    <div className={styles.navigationButtonsWrapper}>
      <MenuBox name="Logistic" />
      <NavigationButton name="Test page" customStyle="menuNameButton" />
    </div>
  );
}
export default NavigationMenu;
