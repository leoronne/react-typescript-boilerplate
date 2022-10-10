import { styled } from '@mui/material/styles';

export const MIN_HEADER_HEIGHT = '75px';

export const Container = styled('header')(({ theme }) => ({
  background: theme.palette.background.default,
  minHeight: MIN_HEADER_HEIGHT,
  padding: `${theme.spacing(2)} 0`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  zIndex: 3,
}));
