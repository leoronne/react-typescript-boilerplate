import { useNavigate } from 'react-router-dom';

import { APP_NAME } from 'shared/consts';
import * as Styles from './styles';

function Logo() {
  const navigate = useNavigate();

  return (
    <Styles.Logo
      aria-label={`${APP_NAME} Logo`}
      data-testid={`${APP_NAME} Logo`}
      onClick={() => navigate('/')}
    />
  );
}

export default Logo;
