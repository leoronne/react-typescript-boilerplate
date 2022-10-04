import { styled } from '@mui/material/styles';
import DialogActionsMUI from '@mui/material/DialogActions';
import DialogMUI from '@mui/material/Dialog';
import DialogTitleMUI from '@mui/material/DialogTitle';

export const Dialog = styled(DialogMUI)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

export const DialogTitle = styled(DialogTitleMUI)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.common.white,
}));

export const DialogActions = styled(DialogActionsMUI)(({ theme }) => ({
  gap: `${theme.spacing(1)}`,
  display: 'flex',
}));
