import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';

import { Drawer } from '../../ui';
import { LanguageOptions, ThemeOptions } from '../CustomOptions';

function SettingsMenu() {
  const { t } = useTranslation();
  return (
    <Drawer title={t('settings')}>
      <ListItem divider sx={{ flexDirection: 'column', alignItems: 'flex-start' }} disableGutters>
        <Typography variant="subtitle2" gutterBottom>
          {t('language')}
        </Typography>

        <LanguageOptions />
      </ListItem>

      <ListItem divider sx={{ flexDirection: 'column', alignItems: 'flex-start' }} disableGutters>
        <Typography variant="subtitle2" gutterBottom>
          {t('theme.base')}
        </Typography>

        <ThemeOptions />
      </ListItem>
    </Drawer>
  );
}

export default SettingsMenu;
