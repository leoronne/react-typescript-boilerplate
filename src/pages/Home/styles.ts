import { styled } from '@mui/material/styles';

import { BannerContainer, getBannerContainerHeight } from 'components/ui/Containers';

export const Container = styled(BannerContainer)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: getBannerContainerHeight(false, theme),

  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    textAlign: 'center',
    gap: theme.spacing(5),
  },
}));
