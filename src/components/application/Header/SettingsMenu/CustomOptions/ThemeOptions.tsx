import { useTranslation } from 'react-i18next';

import { useTheme } from 'hooks';
import { ALLOWED_THEME_MODES } from 'shared/consts';
import * as Styles from './styles';

function ThemeOptions() {
  const { t } = useTranslation();
  const { changeTheme, mode } = useTheme();

  return (
    <Styles.ButtonRow>
      {ALLOWED_THEME_MODES.map(option => (
        <Styles.SelectButton
          key={option.slug}
          type="button"
          size="small"
          aria-label={t(option.translateKey)}
          variant="outlined"
          className={`${mode === option.slug ? 'option-selected' : ''}`}
          startIcon={option.icon}
          onClick={() => changeTheme(option.slug)}
        >
          {t(option.translateKey)}
        </Styles.SelectButton>
      ))}
    </Styles.ButtonRow>
  );
}

export default ThemeOptions;
