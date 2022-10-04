import { ThemeOptions } from '@mui/material/styles';
import { deepPurple, common, grey } from '@mui/material/colors';

export const theme = (mode: 'dark' | 'light'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#915cec',
      dark: '#a484e8',
      light: '#CFB7F7',
    },
    secondary: {
      main: '#F7E1B7',
      dark: '#DAB46E',
      light: '#F7E1B7',
    },
    info: {
      main: deepPurple[100],
    },
    background: {
      default: mode === 'dark' ? '#18191a' : common.white,
      paper: mode === 'dark' ? '#242526' : '#f5f5f5',
    },
  },
  typography: {
    h1: {
      fontWeight: '700',
      fontSize: '3rem',
    },
    h5: {
      fontWeight: '400',
    },
    h6: {
      fontWeight: '500',
      fontSize: '1rem',
      letterSpacing: '0.07rem',
    },
    subtitle1: {
      fontWeight: '300',
    },
    subtitle2: {
      textTransform: 'uppercase',
      letterSpacing: '0.08rem',
    },
    body2: {
      fontSize: '0.8rem',
      color: mode === 'dark' ? grey[500] : grey[700],
    },
  },
});

export { globalStyles } from './GlobalStyles';
