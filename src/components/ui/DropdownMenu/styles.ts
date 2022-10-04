import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';

export const MenuContainer = styled(Menu)(({ theme }) => ({
  '.MuiPaper-root': {
    minWidth: '350px',
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    marginTop: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,

    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      background: theme.palette.background.paper,
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}));
