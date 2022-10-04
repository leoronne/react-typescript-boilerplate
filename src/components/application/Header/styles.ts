import { styled } from '@mui/material/styles';

export const Container = styled('header')(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
