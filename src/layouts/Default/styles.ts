import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const DEFAULT_LAYOUT_VERTICAL_PADDING = 2;

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${theme.spacing(DEFAULT_LAYOUT_VERTICAL_PADDING)} ${theme.spacing(
    4
  )}`,

  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(DEFAULT_LAYOUT_VERTICAL_PADDING)} ${theme.spacing(2)}`,
  },
}));

export const Main = styled('main')(({ theme }) => ({
  width: '100%',
  maxWidth: '1280px',
}));
