import { styled } from '@mui/material/styles';

export const MIN_FOOTER_HEIGHT = '100px';

export const Container = styled('footer')(({ theme }) => ({
  padding: `${theme.spacing(2)} 0`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: MIN_FOOTER_HEIGHT,
}));
