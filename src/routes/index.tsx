import { BrowserRouter, Routes as RoutesList, Route } from 'react-router-dom';

import { routesMap } from './routes-map';

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
