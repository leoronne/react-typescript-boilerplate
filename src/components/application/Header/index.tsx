import Logo from 'components/ui/Logo';
import SettingsMenu from '../SettingsMenu';
import * as Styles from './styles';

function Header() {
  return (
    <Styles.Container>
      <Logo />
      <SettingsMenu />
    </Styles.Container>
  );
}

export default Header;
