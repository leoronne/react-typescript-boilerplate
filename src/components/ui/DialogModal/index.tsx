import DialogContent from '@mui/material/DialogContent';
import { Breakpoint } from '@mui/material/styles';

import { Button, ButtonProps } from '../Button';

import * as Styles from './styles';

interface DialogActionsProps extends ButtonProps {
  text: string;
  handler: () => void;
}

interface DialogModalProps {
  buttons: DialogActionsProps[];
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  maxWidth?: Breakpoint;
  closeHandler: () => void;
}

export default function DialogModal({
  buttons,
  title,
  children,
  isOpen,
  maxWidth = 'sm',
  closeHandler,
}: DialogModalProps) {
  return (
    <Styles.Dialog
      open={isOpen}
      onClose={closeHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={maxWidth}
      fullWidth
    >
      <Styles.DialogTitle id="alert-dialog-title">{title}</Styles.DialogTitle>

      <DialogContent>{children}</DialogContent>

      <Styles.DialogActions>
        {buttons.map(button => (
          <Button
            type={button?.type}
            onClick={button.handler}
            key={button.text}
            variant="contained"
            startIcon={button?.startIcon}
            color={button?.color}
            size="small"
          >
            {button.text}
          </Button>
        ))}
      </Styles.DialogActions>
    </Styles.Dialog>
  );
}
