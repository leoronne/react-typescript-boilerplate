import { createContext } from 'react';

export type ThemeModes = 'dark' | 'light' | 'system';

export interface ThemeContextProps {
  mode: ThemeModes;
  changeTheme: (scheme: ThemeModes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
