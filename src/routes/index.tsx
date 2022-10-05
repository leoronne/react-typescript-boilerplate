import { BrowserRouter, Routes as RoutesList, Route } from 'react-router-dom';

import { Home, NotFound } from 'pages';

function Routes() {
  return (
    <BrowserRouter>
      <RoutesList>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </RoutesList>
    </BrowserRouter>
  );
}

export default Routes;
