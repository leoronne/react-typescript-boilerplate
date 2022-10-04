import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
}));

