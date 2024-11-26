import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend";
import CookieService from "../../services/CookieService";

import translationEng from "./en/translation.json";
import translationGer from "./de/translation.json";
import translationPort from "./ukr/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: CookieService.get("Language") ?? "en",
    fallbackLng: "en",
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      ukr: {
        translations: translationPort,
      },
      en: {
        translations: translationEng,
      },
      de: {
        translations: translationGer,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
