import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import { withDefaultLayout } from 'layouts/Default';
import { Home, NotFound, About } from 'pages';

export const routesMap = [
  {
    path: '*',
    Component: withDefaultLayout(NotFound),
    hideOnMenu: true,
    translateKey: 'notfound.base',
  },
  {
    path: '/',
    Component: withDefaultLayout(Home),
    icon: <HomeRoundedIcon fontSize="small" />,
    hideOnMenu: false,
    translateKey: 'homepage.base',
  },
  {
    path: '/about',
    Component: withDefaultLayout(About),
    icon: <InfoRoundedIcon fontSize="small" />,
    hideOnMenu: false,
    translateKey: 'about.base',
  },
];
