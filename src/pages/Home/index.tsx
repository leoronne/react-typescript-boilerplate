import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { withDefaultLayout } from 'layouts';

import SayHi from 'components/application/SayHi';
import * as Styles from './styles';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Styles.Container>
        <Typography variant="h1">{t('homepage.title')}</Typography>
        <Typography variant="h5">{t('homepage.subtitle')}</Typography>
      </Styles.Container>
      <SayHi />
    </>
  );
}

export default withDefaultLayout(Home);
