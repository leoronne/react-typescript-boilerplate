import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export const DrawerContainer = styled(SwipeableDrawer)(() => ({
  '.MuiPaper-root': {
    minWidth: '350px',
    backgroundImage: `none !important`,
  },
}));

export const Content = styled('ul')(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));
