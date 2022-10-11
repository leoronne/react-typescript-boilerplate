import { ThemeOptions } from '@mui/material/styles';
import { deepPurple, common, grey } from '@mui/material/colors';

export const theme = (mode: 'dark' | 'light'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#A993D9',
      dark: '#a484e8',
      light: '#CFB7F7',
    },
    secondary: {
      main: '#478291',
      dark: '#2A4248',
      light: '#7EB3C0',
    },
    info: {
      main: deepPurple[100],
    },
    background: {
      default: mode === 'dark' ? '#18191a' : common.white,
      paper: mode === 'dark' ? '#343434' : '#f5f5f5',
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Montserrat', Source Sans Pro, Helvetica Neue, Arial, sans-serif`,
    h1: {
      fontWeight: '800',
      fontSize: '3rem',
    },
    h2: {
      fontWeight: '700',
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
    body1: {
      lineHeight: '2',
    },
    body2: {
      fontSize: '0.8rem',
      color: mode === 'dark' ? grey[500] : grey[700],
    },
  },
});

export { globalStyles } from './GlobalStyles';
