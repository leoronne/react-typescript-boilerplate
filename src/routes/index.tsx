import { BrowserRouter, Routes as RoutesList, Route } from 'react-router-dom';
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

function Routes() {
  return (
    <BrowserRouter>
      <RoutesList>
        {routesMap.map(route => (
          <Route
            key={route.translateKey}
            path={route.path}
            element={<route.Component />}
          />
        ))}
      </RoutesList>
    </BrowserRouter>
  );
}

export default Routes;
