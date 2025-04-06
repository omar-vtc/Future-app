// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
// import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

// Configure i18n instance
i18n
  .use(LanguageDetector) // Auto-detects user's language
  .use(initReactI18next) // Initializes react-i18next with i18n instance
  .init({
    resources: {
      // en: { translation: translationEN },
      ar: { translation: translationAR },
    },
    fallbackLng: "en", // Fallback language if the user’s language isn’t available
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    detection: {
      // Detect user language from localStorage, cookie, etc.
      order: ["localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
