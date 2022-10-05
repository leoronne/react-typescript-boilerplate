import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider as ThemeProviderMUI } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeContext,  } from 'contexts';
import { ALLOWED_THEME_MODES, DEFAULT_THEME_MODE, APP_SLUG } from 'shared/consts';
import { globalStyles, theme } from 'styles';

export const localStorageSlug = `@${APP_SLUG}/Theme`;

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<ThemeModes>(DEFAULT_THEME_MODE);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const getTheme = React.useCallback(() => {
    if (mode === 'system') return prefersDarkMode ? 'dark' : 'light';

    return mode;
  }, [mode, prefersDarkMode]);

  const changeTheme = React.useCallback((scheme: ThemeModes) => {
    try {
      localStorage.setItem(localStorageSlug, scheme);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err?.message);
    } finally {
      setMode(scheme);
    }
  }, []);

  React.useEffect(() => {
    try {
      const scheme = localStorage.getItem(localStorageSlug);

      if (scheme && ALLOWED_THEME_MODES.includes(scheme as ThemeModes)) setMode(scheme as ThemeModes);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err?.message);
    }
  }, []);

  const currentTheme = React.useMemo(() => createTheme(theme(getTheme())), [getTheme]);

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
