import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const DEFAULT_LAYOUT_VERTICAL_PADDING = 5;

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing(DEFAULT_LAYOUT_VERTICAL_PADDING)} ${theme.spacing(4)}`,

  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
  },
}));
