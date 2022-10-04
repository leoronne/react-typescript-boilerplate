import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { englishUS, portugueseBR } from './locales';
import { allowedLanguages, allowedLanguagesSlugs } from './providers/LanguageProvider';


i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: englishUS,
    },
    pt: { translation: portugueseBR },
  },
  lng: allowedLanguages[0].slug,
  fallbackLng: allowedLanguages[0].slug,

  supportedLngs: allowedLanguagesSlugs,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
