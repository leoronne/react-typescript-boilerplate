import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider as ThemeProviderMUI } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { globalStyles, theme } from 'styles';
import { ThemeContext, ThemeModes } from 'contexts';

const allowedModes: ThemeModes[] = ['dark', 'light', 'system'];

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<ThemeModes>('system');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const getTheme = React.useCallback(() => {
    if (mode === 'system') return prefersDarkMode ? 'dark' : 'light';

    return mode;
  }, [mode, prefersDarkMode]);

  const changeTheme = React.useCallback((scheme: ThemeModes) => {
    try {
      localStorage.setItem('@eSports-Matcher/Theme', scheme);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err?.message);
    } finally {
      setMode(scheme);
    }
  }, []);

  React.useEffect(() => {
    try {
      const scheme = localStorage.getItem('@eSports-Matcher/Theme');

      if (scheme && allowedModes.includes(scheme as ThemeModes)) setMode(scheme as ThemeModes);
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
