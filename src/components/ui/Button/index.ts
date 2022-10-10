import { styled } from '@mui/material/styles';
import ButtonMUI from '@mui/material/Button';

export const Button = styled(ButtonMUI)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  display: 'flex',
  alignItems: 'center',
  textTransform: 'none',

  '&.MuiButton-outlinedPrimary': {
    color: theme.palette.primary.dark,
  },
}));

export type { ButtonProps } from '@mui/material/Button';
