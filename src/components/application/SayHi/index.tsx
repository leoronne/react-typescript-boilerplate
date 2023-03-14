import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
import { useTranslation } from 'react-i18next';

import {
  DEVELOPER_NAME,
  DEVELOPER_SOCIAL_USERNAME,
  DEVELOPER_EMAIL,
} from 'shared/consts';
import { Link } from 'components/ui/Link';
import TitledContainer from 'components/ui/Containers/TitledContainer';
import avatar from 'assets/jpg/avatar.jpg';
import SocialLinks from '../SocialLinks';
import * as Styles from './styles';

function SayHi() {
  const { t } = useTranslation();

  return (
    <TitledContainer title={t('sayhi.title')}>
      <Styles.Content>
        <Link
          href={`mailto:${DEVELOPER_EMAIL}`}
          aria-label={t('sayhi.sendmail')}
        >
          <Styles.Email variant="h2">{DEVELOPER_SOCIAL_USERNAME}</Styles.Email>
        </Link>

        <Divider />

        <Typography variant="body1">{t('sayhi.description')}</Typography>

        <Typography variant="body1">
          <span>{DEVELOPER_NAME}</span>
          <br />
          <span>São Paulo, Brazil</span>
        </Typography>

        <SocialLinks />
      </Styles.Content>

      <Styles.AvatarContainer>
        <Image
          src={avatar}
          alt={`${DEVELOPER_NAME} Avatar`}
          aria-label={`${DEVELOPER_NAME} Avatar`}
          duration={500}
          easing="cubic-bezier(0.7, 0, 0.6, 1)"
          shiftDuration={900}
          bgColor="inherit"
        />
      </Styles.AvatarContainer>
    </TitledContainer>
  );
}

export default SayHi;
