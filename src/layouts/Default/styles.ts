import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing(5)} ${theme.spacing(4)}`,

  [theme.breakpoints.down('sm')]: {
  padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
  },
}));

