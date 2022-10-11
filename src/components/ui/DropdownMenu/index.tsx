import { ReactNode } from 'react';
import { PopoverOrigin } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import Fade from '@mui/material/Fade';

import * as Styles from './styles';

interface DropdownMenuProps {
  children?: ReactNode;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  transformOrigin?: PopoverOrigin;
  anchorOrigin?: PopoverOrigin;
}

function DropdownMenu({
  children,
  anchorEl,
  transformOrigin,
  anchorOrigin = { horizontal: 'left', vertical: 'bottom' },
  handleClose,
}: DropdownMenuProps) {
  const open = Boolean(anchorEl);

  return (
    <Styles.MenuContainer
      id="fade-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      PaperProps={{
        elevation: 0,
      }}
      transformOrigin={transformOrigin}
      anchorOrigin={anchorOrigin}
    >
      {children}
    </Styles.MenuContainer>
  );
}

interface MenuItemProps {
  icon?: JSX.Element;
  title: string;
  action?: () => void;
}

export function MenuItem({ icon, title, action, ...rest }: MenuItemProps) {
  return (
    <Styles.MenuItem onClick={() => action && action()}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <Typography variant="body1">{title}</Typography>
    </Styles.MenuItem>
  );
}

export default DropdownMenu;
