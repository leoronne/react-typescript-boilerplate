import Typography from '@mui/material/Typography';

import * as Styles from './styles';

function Footer() {
  return (
    <Styles.Container>
      <Typography variant="body2">{`<ronne.dev /> © ${new Date().getFullYear()}`}</Typography>
    </Styles.Container>
  );
}

export default Footer;
