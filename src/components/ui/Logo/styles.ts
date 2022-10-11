import { styled } from '@mui/material/styles';

import { ReactComponent as Reactlogo } from 'assets/svg/logo.svg';

export const Logo = styled(Reactlogo)(({ theme }) => ({
  cursor: 'pointer',
  height: '20px',
  '& path': {
    fill: theme.palette.text.primary,
  },
}));
