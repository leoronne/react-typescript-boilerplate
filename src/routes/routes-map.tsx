import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { withDefaultLayout } from 'layouts/Default';
import { Home, NotFound } from 'pages';

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
];
