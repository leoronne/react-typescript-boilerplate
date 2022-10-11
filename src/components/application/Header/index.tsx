import { useTranslation } from 'react-i18next';

import Logo from 'components/ui/Logo';
import SettingsMenu from './SettingsMenu';
import PagesMenu from './PagesMenu';
import * as Styles from './styles';

function Header() {
  const { t } = useTranslation();

  return (
    <Styles.Container>
      <PagesMenu />
      <Logo />
      <SettingsMenu />
    </Styles.Container>
  );
}

export default Header;
