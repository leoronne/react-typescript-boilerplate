import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { ReactComponent as NotFoundBg } from 'assets/svg/404.svg';

export const Container = styled(Box)(({ theme }) => ({
  padding: `0 ${theme.spacing(5)}`,
  margin: 'auto',
  width: '100%',
  display: 'flex',
  gap: theme.spacing(10),
  alignItems: 'center',
  justifyContent: 'space-around',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(3)}`,
    flexDirection: 'column-reverse',
  },
}));

export const Main = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',

  '> a': {
    marginTop: theme.spacing(3),
  },
}));

export const NotFoundIcon = styled(NotFoundBg)(({ theme }) => ({
  width: '100%',
  maxWidth: '540px',
  '& .cls-1': { fill: theme.palette.grey[300] },
  '& .cls-2': { fill: theme.palette.grey[700] },
  '& .cls-3': { fill: '#de8e68' },
  '& .cls-4': { fill: '#434354' },
  '& .cls-5': { fill: '#4d4d5e' },
  '& .cls-6': { fill: '#d37c59' },
  '& .cls-7': { fill: theme.palette.primary.main },
  '& .cls-8': { fill: theme.palette.primary.dark },
  '& .cls-9': { fill: '#dc8e6c' },

  [theme.breakpoints.down('sm')]: {
    width: '70%',
  },
}));
