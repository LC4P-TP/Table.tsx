import NavigationButton from "./navigationButton";
import styles from "./sidebar.module.scss";
import { useState } from "react";

interface subMenu {
  [key: string]: string[];
}

type block = string | subMenu;

const nameMap: Record<string, block[]> = {
  Logistic: ["Inbound supplies", "asuuiahsdug", { "Logistic settings": ["Home"] }],
};

const MenuBlock: React.FC<{ subMenu: subMenu }> = ({ subMenu }) => {
  const [subMenuControl, setSubMenuControl] = useState(false);
  const [[key, value]] = Object.entries(subMenu);

  return (
    <div className={styles.subMenuBox}>
      <button
        type="button"
        className={`mainButtonStyles ${styles.subMenuName}`}
        onClick={() => setSubMenuControl(!subMenuControl)}
      >
        {subMenuControl ? "▲" : "▼"} {key}
      </button>
      {subMenuControl ? (
        <div>
          {value.map((name) => (
            <NavigationButton key={name} name={name} customStyle={"navigationButton"} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const MenuBox: React.FC<{ name: string }> = ({ name }) => {
  const [menuControl, setMenuControl] = useState(false);
  const block = nameMap[name];
  if (!block) return null;

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
          {block.map((element, index) => {
            if (typeof element === "object") {
              return <MenuBlock key={`submenu-${String(index)}`} subMenu={element} />;
            }
            return <NavigationButton key={element} name={element} customStyle={"navigationButton"} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

const NavigationMenu: React.FC = () => {
  return (
    <div className={styles.navigationButtonsWrapper}>
      <MenuBox name="Logistic" />
      <NavigationButton name="Test page" customStyle={"menuNameButton"} />
    </div>
  );
};

export default NavigationMenu;
