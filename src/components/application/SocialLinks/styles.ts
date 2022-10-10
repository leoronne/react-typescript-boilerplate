import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  position: 'relative',
}));
