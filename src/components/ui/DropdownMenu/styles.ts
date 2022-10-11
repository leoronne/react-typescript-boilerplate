import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItemMUI from '@mui/material/MenuItem';

export const MenuContainer = styled(Menu)(({ theme }) => ({
  '.MuiPaper-root': {
    minWidth: '310px',
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    marginTop: theme.spacing(1.5),
    borderRadius: theme.spacing(0.5),
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,

    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
  },
}));

export const MenuItem = styled(MenuItemMUI)(({ theme }) => ({
  '&.MuiMenuItem-root': {
    borderRadius: theme.spacing(0.5),
    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
  },
}));
