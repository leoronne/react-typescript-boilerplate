import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useTranslation } from 'react-i18next';

import { withDefaultLayout } from '../../layouts';

import { Button } from '../../components/ui/Button';
import * as Styles from './styles';

function NotFound() {
  const { t } = useTranslation();
  return (
    <Styles.Container>
      <Styles.Main>
        <Typography variant="h1">{t('something-wrong')}</Typography>
        <Typography variant="h5">{t('page-not-found')}</Typography>
        <Button
          type="button"
          variant="outlined"
          href="/"
          startIcon={<HomeRoundedIcon />}
          sx={{ width: 'fit-content', textTransform: 'uppercase' }}
        >
          {t('return-homepage')}
        </Button>
      </Styles.Main>
      <Styles.NotFoundIcon />
    </Styles.Container>
  );
}

export default withDefaultLayout(NotFound);
