import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { englishUS, portugueseBR } from './locales';
import { CONSTS } from './shared';

const { ALLOWED_LANGUAGES, ALLOWED_LANGUAGES_SLUGS } = CONSTS;

i18n.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: englishUS,
    },
    pt: { translation: portugueseBR },
  },
  lng: ALLOWED_LANGUAGES[0].slug,
  fallbackLng: ALLOWED_LANGUAGES[0].slug,

  supportedLngs: ALLOWED_LANGUAGES_SLUGS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
