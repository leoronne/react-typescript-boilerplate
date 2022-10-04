import { ReactNode, useState } from 'react';
import Fade from '@mui/material/Fade';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useTheme } from '@mui/material/styles';

import { IconButton } from '../IconButton';
import * as Styles from './styles';

interface DropdownMenuProps {
  children?: ReactNode;
}

function DropdownMenu({ children }: DropdownMenuProps) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="Menu" onClick={handleClick}>
        <SettingsRoundedIcon
          sx={{ color: open ? theme.palette.primary.light : theme.palette.text.primary }}
        />
      </IconButton>
      <Styles.MenuContainer
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          elevation: 0,
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {children}
      </Styles.MenuContainer>
    </>
  );
}

export default DropdownMenu;
