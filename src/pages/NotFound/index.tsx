import Typography from '@mui/material/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import * as Styles from './styles';

function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Styles.Container>
      <Styles.Main>
        <Typography variant="h1">{t('notfound.title')}</Typography>
        <Typography variant="h5">{t('notfound.description')}</Typography>
        <Button
          type="button"
          variant="outlined"
          startIcon={<HomeRoundedIcon />}
          sx={{ width: 'fit-content', textTransform: 'uppercase' }}
          onClick={() => navigate('/')}
        >
          {t('notfound.returnbutton')}
        </Button>
      </Styles.Main>
      <Styles.NotFoundIcon />
    </Styles.Container>
  );
}

export default NotFound;
