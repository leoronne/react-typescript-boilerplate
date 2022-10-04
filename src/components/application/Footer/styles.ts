import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled('footer')(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Main = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  gap: theme.spacing(4),
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));
