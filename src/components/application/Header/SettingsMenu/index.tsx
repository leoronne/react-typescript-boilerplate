import { useTranslation } from 'react-i18next';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';

import { useDrawer } from 'hooks/useDrawer';
import { IconButton } from 'components/ui/IconButton';
import Drawer from 'components/ui/Drawer';
import { LanguageOptions, ThemeOptions } from './CustomOptions';

function SettingsMenu() {
  const { t } = useTranslation();
  const { toggleDrawer, drawerOrigin } = useDrawer();

  return (
    <>
      <IconButton
        aria-label={t('settings.open')}
        onClick={toggleDrawer('right')}
      >
        <SettingsRoundedIcon />
      </IconButton>

      <Drawer
        title={t('settings.base')}
        state={drawerOrigin}
        handleDrawer={toggleDrawer}
      >
        <ListItem
          divider
          sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
          disableGutters
        >
          <Typography variant="subtitle2" gutterBottom>
            {t('language.base')}
          </Typography>

          <LanguageOptions />
        </ListItem>

        <ListItem
          divider
          sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
          disableGutters
        >
          <Typography variant="subtitle2" gutterBottom>
            {t('theme.base')}
          </Typography>

          <ThemeOptions />
        </ListItem>
      </Drawer>
    </>
  );
}

export default SettingsMenu;
