import { useTranslation } from 'react-i18next';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { IconButton } from 'components/ui/IconButton';
import * as Styles from './styles';

interface DrawerProps {
  children?: React.ReactNode;
  anchorEl?: Anchor;
  title?: string;
  state: {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  handleDrawer: (anchor: Anchor, open?: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

function Drawer({ children, title, anchorEl = 'right', state, handleDrawer }: DrawerProps) {
  const { t } = useTranslation();

  return (
    <Styles.DrawerContainer
      anchor={anchorEl}
      open={state[anchorEl]}
      onClose={handleDrawer(anchorEl, false)}
      onOpen={handleDrawer(anchorEl, true)}
    >
      <Styles.Header>
        <Typography variant="h6">{title}</Typography>
        <IconButton aria-label={t('settings.close')} onClick={handleDrawer(anchorEl, false)}>
          <CloseRoundedIcon />
        </IconButton>
      </Styles.Header>

      <Divider />

      <Styles.Content>{children}</Styles.Content>
    </Styles.DrawerContainer>
  );
}

export default Drawer;
