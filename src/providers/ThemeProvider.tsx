import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  createTheme,
  ThemeProvider as ThemeProviderMUI,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeContext } from 'contexts';
import { ALLOWED_THEME_MODES, DEFAULT_THEME_MODE, localStorageSlugTheme } from 'shared/consts';
import { globalStyles, theme } from 'styles';
import { getItem, setItem } from 'utils/local-storage';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<ThemeModes>(() => {
    const scheme = getItem(localStorageSlugTheme) as ThemeModes;

    if (scheme && ALLOWED_THEME_MODES.some(t => t.slug === scheme))
      return scheme;

    return DEFAULT_THEME_MODE.slug;
  });

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const getTheme = React.useCallback(() => {
    if (mode === 'system') return prefersDarkMode ? 'dark' : 'light';

    return mode;
  }, [mode, prefersDarkMode]);

  const changeTheme = React.useCallback((scheme: ThemeModes) => {
    setItem(localStorageSlugTheme, scheme);
    setMode(scheme);
  }, []);

  const currentTheme = React.useMemo(
    () => createTheme(theme(getTheme())),
    [getTheme]
  );

  const colorMode = React.useMemo(() => mode, [mode]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ mode: colorMode, changeTheme }}>
      <ThemeProviderMUI theme={currentTheme}>
        {globalStyles}
        <CssBaseline />
        {children}
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
