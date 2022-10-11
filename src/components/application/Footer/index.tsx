import Typography from '@mui/material/Typography';

import * as Styles from './styles';

export const footerText = `<ronne.dev /> © ${new Date().getFullYear()}`;

function Footer() {
  return (
    <Styles.Container>
      <Typography variant="body2">{footerText}</Typography>
    </Styles.Container>
  );
}

export default Footer;
