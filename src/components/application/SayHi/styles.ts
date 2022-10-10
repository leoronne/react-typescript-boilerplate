/* eslint-disable no-useless-escape */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '6.5rem',
  zIndex: 2,
  marginBottom: `-${theme.spacing(6)}`,

  [theme.breakpoints.down('sm')]: {
    fontSize: '18vw',
    marginBottom: `-10vw`,
  },
}));

export const Email = styled(Typography)(({ theme }) => ({
  lineBreak: 'anywhere',

  '&:after': {
    content: `'\@gmail.com'`,
    whiteSpace: 'pre',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '12vw',
  },
}));

export const Main = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  background: '#1f4954',
}));

export const AvatarContainer = styled(Box)(({ theme }) => ({
  maxHeight: '620px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(5),
  padding: `${theme.spacing(9)} ${theme.spacing(5)}`,
  flexDirection: 'column',
  position: 'relative',
  color: theme.palette.common.white,

  'svg, a': {
    color: theme.palette.common.white,
  },

  'a:before': {
    backgroundColor: theme.palette.common.white,
  },

  hr: {
    width: '30%',
    color: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.white}`,
  },
}));
