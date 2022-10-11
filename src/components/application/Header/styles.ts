import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MIN_HEADER_HEIGHT = '75px';

export const Container = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  width: '100%',
  background: theme.palette.background.default,
  minHeight: MIN_HEADER_HEIGHT,
  padding: `${theme.spacing(2)} 0`,
  top: 0,
  zIndex: 3,

  svg: {
    opacity: 0.8,
    transition: `opacity ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,

    '&:hover': {
      opacity: 1,
      transition: `opacity ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    },
  },
}));

export const Links = styled(Box)(({ theme }) => ({
  gap: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}));
