import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';

import { IconButton } from 'components/ui/IconButton';

import * as Styles from './styles';

const openLink = (url: string) => window.open(url, '_blank');

interface SocialProps {
  user: string;
  size?: 'small' | 'medium' | 'large';
}

export function GitHub({ user, size = 'medium' }: SocialProps) {
  const { t } = useTranslation();

  return (
    <IconButton
      aria-label={t('github.profile')}
      size={size}
      onClick={() => openLink(`https://github.com/${user}`)}
    >
      <GitHubIcon />
    </IconButton>
  );
}

export function LinkedIn({ user, size = 'medium' }: SocialProps) {
  const { t } = useTranslation();

  return (
    <IconButton
      aria-label={t('linkedin.profile')}
      size={size}
      onClick={() => openLink(`https://linkedin.com/in/${user}`)}
    >
      <LinkedInIcon />
    </IconButton>
  );
}

function SocialLinks() {
  return (
    <Styles.Container>
      <GitHub user="leoronne" />
      <LinkedIn user="leoronne" />
    </Styles.Container>
  );
}

export default SocialLinks;
