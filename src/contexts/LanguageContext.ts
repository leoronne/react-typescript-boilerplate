import { createContext } from 'react';

export interface LanguageContextProps {
  language: string;
  changeLanguage: (lgn: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);
