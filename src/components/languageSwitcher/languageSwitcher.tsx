import { useState } from "react";
import { useTranslation } from "react-i18next";
import CookieService from "../../services/CookieService";
import styles from "./languageSwitcher.module.scss";

import en from "../../assets/en.png";
import de from "../../assets/de.png";
import ukr from "../../assets/ukr.png";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const [display, setDisplay] = useState(false);
  const handleButtonSwitcher = () => setDisplay(!display);

  const titleList: Record<string, string> = {
    ukr: "Ukrainian",
    en: "English",
    de: "Deutsch",
  };

  const langimgList: Record<string, string> = {
    ukr,
    en,
    de,
  };

  type langType = keyof typeof langimgList;

  const languagesList = Object.keys(langimgList) as Array<langType>;

  const setLanguage = (lang: langType) => {
    if (lang) {
      i18n.changeLanguage(lang);
      CookieService.set("Language", lang);
    }
  };

  const toggleLanguage = (lang: langType) => {
    setLanguage(lang);
    handleButtonSwitcher();
  };

  return (
    <div className={styles.languageSwitcher}>
      <div className={`${styles.languagesList} ${!display ? styles.showLanguagesList : ""}`}>
        {languagesList
          .filter((element) => element !== language)
          .map((element) => (
            <div key={element} className={styles.buttonBox}>
              <button type="button" className={styles.languageButton} onClick={() => toggleLanguage(element)}>
                <div className={styles.imgBox}>
                  <img src={langimgList[element]} alt={element} />
                </div>
                <div className={styles.title}>{titleList[element]}</div>
              </button>
            </div>
          ))}
      </div>

      <div className={styles.mainButtonBox}>
        <div className={styles.buttonBox}>
          <button
            type="button"
            title={t("Change language")}
            className={styles.languageButton}
            onClick={handleButtonSwitcher}
          >
            <div className={styles.imgBox}>
              <img src={langimgList[language]} alt={language} />
            </div>
            <div className={styles.title}>{titleList[language]}</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
