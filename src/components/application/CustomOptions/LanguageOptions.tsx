import { useTranslation } from 'react-i18next';
import SvgIcon from '@mui/material/SvgIcon';

import { allowedLanguages } from '../../../providers/LanguageProvider';
import { useLanguage } from '../../../hooks';
import * as Styles from './styles';

function LanguageOptions() {
  const { t } = useTranslation();
  const { changeLanguage, language } = useLanguage();

  return (
    <Styles.ButtonRow variant="outlined">
      {allowedLanguages.map(option => (
        <Styles.SelectButton
          key={option.name}
          type="button"
          size="small"
          aria-label={`Change language to ${t(option.translateSlug)}`}
          variant="outlined"
          className={`${language === option.slug ? 'option-selected' : ''}`}
          startIcon={<SvgIcon>{option.icon}</SvgIcon>}
          onClick={() => changeLanguage(option.slug)}
        >
          {t(option.translateSlug)}
        </Styles.SelectButton>
      ))}
    </Styles.ButtonRow>
  );
}

export default LanguageOptions;
