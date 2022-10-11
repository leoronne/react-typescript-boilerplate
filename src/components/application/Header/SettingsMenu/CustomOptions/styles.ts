import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

import { Button } from 'components/ui/Button';

export const ButtonRow = styled(ButtonGroup)(({ theme }) => ({
  borderRadius: `${theme.spacing(1)}`,
  width: '100%',
  justifyContent: 'center',
}));

export const SelectButton = styled(Button)(({ theme }) => ({
  height: '45px',
  width: '50%',

  '&.option-selected': {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,

    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },

  '&:hover': {
    outline: 'none !important',
    borderColor: `${theme.palette.primary.light} !important`,
  },
}));
