import { useContext } from 'react';

import { LanguageContext, LanguageContextProps } from '../contexts';

const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within an LanguageProvider');
  }

  return context;
};

export { useLanguage };
