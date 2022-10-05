import { createContext } from 'react';

export interface ThemeContextProps {
  mode: ThemeModes;
  changeTheme: (scheme: ThemeModes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
