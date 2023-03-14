import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { BannerContainer, getBannerContainerHeight } from 'components/ui/Containers';

export const Container = styled(BannerContainer)(({ theme }) => ({
  padding: 0,
  alignItems: 'center',
  justifyContent: 'center',
  height: getBannerContainerHeight(false, theme),

  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    textAlign: 'center',
    gap: theme.spacing(5),
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(5),
  padding: `${theme.spacing(9)} ${theme.spacing(5)}`,
  flexDirection: 'column',
  position: 'relative',
  color: theme.palette.common.white,
}));
