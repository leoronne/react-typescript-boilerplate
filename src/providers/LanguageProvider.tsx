import React from 'react';
import i18n from 'i18next';

import { ALLOWED_LANGUAGES_SLUGS, DEFAULT_LANGUAGE, APP_SLUG } from 'shared/consts';
import { LanguageContext } from 'contexts';

export const localStorageSlug = `@${APP_SLUG}/Language`;

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<string>(i18n.language || DEFAULT_LANGUAGE.slug);

  const changeLanguage = React.useCallback((lgn: string) => {
    try {
      if (i18n.language !== lgn) {
        i18n.changeLanguage(lgn);
        setLanguage(lgn);
        localStorage.setItem(localStorageSlug, lgn);
      }
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err?.message);
    }
  }, []);

  React.useEffect(() => {
    try {
      const strLanguage = localStorage.getItem(localStorageSlug);

      if (strLanguage && ALLOWED_LANGUAGES_SLUGS.includes(strLanguage)) changeLanguage(strLanguage);
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
