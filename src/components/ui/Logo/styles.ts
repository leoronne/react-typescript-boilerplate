import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

import { ReactComponent as Reactlogo } from '../../../assets/svg/logo.svg';

export const Container = styled(Link)({
  transition: '0.7s ease-in-out',

  '&:hover': {
    filter: 'brightness(1.1)',
    transition: 'filter 0.7s ease-in-out',
  },
});

export const Logo = styled(Reactlogo)(({ theme }) => ({
  height: '50px',
  '& path': {
    fill: theme.palette.text.primary
  },
}));
