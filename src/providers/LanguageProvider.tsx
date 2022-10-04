import React from 'react';
import i18n from 'i18next';

import { ReactComponent as Brazil } from '../assets/svg/brazil.svg';
import { ReactComponent as USA } from '../assets/svg/usa.svg';

import { LanguageContext } from '../contexts';

export const allowedLanguages = [
  {
    name: 'English',
    slug: 'en',
    icon: <USA />,
    translateSlug: 'language-en',
  },
  {
    name: 'Português',
    slug: 'pt',
    icon: <Brazil />,
    translateSlug: 'language-pt',
  },
];

export const allowedLanguagesSlugs = allowedLanguages.map(language => language.slug)

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<string>(i18n.language || 'en');

  const changeLanguage = React.useCallback((lgn: string) => {
    try {
      if (i18n.language !== lgn) {
        i18n.changeLanguage(lgn);
        setLanguage(lgn);
        localStorage.setItem('@eSports-Matcher/Language', lgn);
      }
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err?.message);
    }
  }, []);

  React.useEffect(() => {
    try {
      const strLanguage = localStorage.getItem('@eSports-Matcher/Language');

      if (strLanguage && allowedLanguagesSlugs.includes(strLanguage)) changeLanguage(strLanguage);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err?.message);
    }
  }, [changeLanguage]);

  const currentLanguage = React.useMemo(() => language, [language]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LanguageContext.Provider value={{ language: currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
