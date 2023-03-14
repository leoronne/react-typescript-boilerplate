import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import SayHi from 'components/application/SayHi';
import TitledContainer from 'components/ui/Containers/TitledContainer';
import * as Styles from './styles';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Styles.Container>
        <TitledContainer title={t('about.base')}>
          <Styles.Content>
            <Typography variant="h1">{t('homepage.title')}</Typography>
            <Typography variant="h5">{t('homepage.subtitle')}</Typography>
          </Styles.Content>
        </TitledContainer>
      </Styles.Container>
      <SayHi />
    </>
  );
}

export default About;
