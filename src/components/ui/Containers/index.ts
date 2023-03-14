import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { MIN_HEADER_HEIGHT } from 'components/application/Header/styles';
import { MIN_FOOTER_HEIGHT } from 'components/application/Footer/styles';
import { DEFAULT_LAYOUT_VERTICAL_PADDING } from 'layouts/Default/styles';

export const getBannerContainerHeight = (
  removeFooter: boolean,
  theme: Theme
) => {
  const layoutPadding =
    DEFAULT_LAYOUT_VERTICAL_PADDING * (removeFooter ? 2 : 1);

  return `calc(100vh - ${theme.spacing(
    layoutPadding
  )} - ${MIN_HEADER_HEIGHT} - ${removeFooter ? MIN_FOOTER_HEIGHT : '0px'})`;
};

export const BannerContainer = styled(Box)(({ theme }) => ({
  padding: `0 ${theme.spacing(5)}`,
  width: '100%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    padding: `0 ${theme.spacing(3)}`,
  },
}));

export const TitledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
}));

export const TitledContainerTitle = styled(Typography)(({ theme }) => ({
  fontSize: '6.5rem',
  zIndex: 2,
  marginBottom: `-${theme.spacing(6)}`,

  '&:after': {
    content: '"."',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '18vw',
    marginBottom: `-10vw`,
  },
}));

export const TitledContainerMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  background: theme.palette.secondary.dark,
}));
