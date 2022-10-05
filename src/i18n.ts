import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { englishUS, portugueseBR } from './locales';
import { DEFAULT_LANGUAGE, ALLOWED_LANGUAGES_SLUGS } from './shared/consts';

i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  resources: {
    en: {
      translation: englishUS,
    },
    pt: { translation: portugueseBR },
  },
  lng: DEFAULT_LANGUAGE.slug,
  fallbackLng: DEFAULT_LANGUAGE.slug,

  supportedLngs: ALLOWED_LANGUAGES_SLUGS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
