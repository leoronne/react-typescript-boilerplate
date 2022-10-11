import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import SvgIcon from '@mui/material/SvgIcon';

import { ALLOWED_LANGUAGES, languageLocalStorageSlug } from 'shared/consts';
import { setItem } from 'utils/local-storage';
import * as Styles from './styles';

function LanguageOptions() {
  const { t } = useTranslation();

  const changeLanguage = (lgn: string) => {
    try {
      if (i18n.language !== lgn) {
        i18n.changeLanguage(lgn);
        setItem(languageLocalStorageSlug, lgn);
      }
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err?.message);
    }
  };

  return (
    <Styles.ButtonRow variant="outlined">
      {ALLOWED_LANGUAGES.map(option => (
        <Styles.SelectButton
          key={option.name}
          type="button"
          size="small"
          aria-label={t(option.translateKey)}
          variant="outlined"
          className={`${
            i18n.language === option.slug ? 'option-selected' : ''
          }`}
          startIcon={<SvgIcon>{option.icon}</SvgIcon>}
          onClick={() => changeLanguage(option.slug)}
        >
          {t(option.translateKey)}
        </Styles.SelectButton>
      ))}
    </Styles.ButtonRow>
  );
}

export default LanguageOptions;
