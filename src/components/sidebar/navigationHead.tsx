import styles from "./sidebar.module.scss";
import { NavigationButton } from "../navigationButton/navigationButton";

function NavigationHead() {
  const buttonsParameters = ["Home"];

  return (
    <div className={styles.mainNavigationArea}>
      {buttonsParameters.map((name, index) => (
        <NavigationButton key={`${name}-${String(index)}`} name={name} customStyle="mainNavigationButton" />
      ))}
    </div>
  );
}

export default NavigationHead;
