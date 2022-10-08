import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getItem } from 'utils/local-storage';
import {
  DEFAULT_LANGUAGE,
  ALLOWED_LANGUAGES_SLUGS,
  languageLocalStorageSlug,
  ALLOWED_LANGUAGES,
} from 'shared/consts';

const getLocalStorageLanguage = () => {
  const language = getItem(languageLocalStorageSlug);

  if (language && ALLOWED_LANGUAGES_SLUGS.some(lgn => lgn === language))
    return language;

  return null;
};

const getRsources = () => {
  const resouces = {};
  ALLOWED_LANGUAGES.forEach(lgn => {
    Object.assign(resouces, {
      [lgn.slug]: {
        translation: lgn.translationPath,
      },
    });
  });

  return resouces;
};

i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  resources: getRsources(),
  lng: getLocalStorageLanguage() || DEFAULT_LANGUAGE.slug,
  fallbackLng: DEFAULT_LANGUAGE.slug,

  supportedLngs: ALLOWED_LANGUAGES_SLUGS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
