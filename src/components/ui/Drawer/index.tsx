import React, { ReactNode, useState } from 'react';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

import { IconButton } from '../IconButton';
import * as Styles from './styles';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DrawerProps {
  children?: ReactNode;
  anchorEl?: Anchor;
  title?: string;
}

function Drawer({ children, title, anchorEl = 'right' }: DrawerProps) {
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <IconButton aria-label="Menu" onClick={toggleDrawer(anchorEl, true)}>
        <SettingsRoundedIcon sx={{ color: state.right ? theme.palette.primary.light : theme.palette.text.primary }} />
      </IconButton>
      <Styles.DrawerContainer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(anchorEl, false)}
        onOpen={toggleDrawer(anchorEl, true)}
      >
        <Styles.Header>
          <Typography variant="h6">{title}</Typography>
          <IconButton aria-label="Close Menu" onClick={toggleDrawer(anchorEl, false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Styles.Header>

        <Divider />

        <Styles.Content>{children}</Styles.Content>
      </Styles.DrawerContainer>
    </div>
  );
}

export default Drawer;
