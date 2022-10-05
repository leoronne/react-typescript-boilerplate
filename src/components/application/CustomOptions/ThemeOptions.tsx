import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';

import { useTranslation } from 'react-i18next';

import { useTheme } from 'hooks';
import * as Styles from './styles';

function ThemeOptions() {
  const { t } = useTranslation();
  const { changeTheme, mode } = useTheme();

  return (
    <Styles.ButtonRow>
      <Styles.SelectButton
        type="button"
        size="small"
        aria-label={t('theme.light')}
        variant="outlined"
        className={`${mode === 'light' ? 'option-selected' : ''}`}
        startIcon={<WbSunnyOutlinedIcon />}
        onClick={() => changeTheme('light')}
      >
        {t('theme.light')}
      </Styles.SelectButton>

      <Styles.SelectButton
        type="button"
        size="small"
        aria-label={t('theme.system')}
        variant="outlined"
        className={`${mode === 'system' ? 'option-selected' : ''}`}
        startIcon={<SettingsBrightnessOutlinedIcon />}
        onClick={() => changeTheme('system')}
      >
        {t('theme.system')}
      </Styles.SelectButton>

      <Styles.SelectButton
        type="button"
        size="small"
        aria-label={t('theme.dark')}
        variant="outlined"
        className={`${mode === 'dark' ? 'option-selected' : ''}`}
        startIcon={<DarkModeOutlinedIcon />}
        onClick={() => changeTheme('dark')}
      >
        {t('theme.dark')}
      </Styles.SelectButton>
    </Styles.ButtonRow>
  );
}

export default ThemeOptions;
