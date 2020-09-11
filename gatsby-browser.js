import React from 'react';
import { Helmet } from 'react-helmet';

import './src/styles/global.css';
import './src/styles/typeface-greycliff.css';

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <html lang="es" dir="ltr" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />

      <script async defer data-domain="drsaavedra.mx" src="https://stats.drsaavedra.mx/js/index.js"></script>
    </Helmet>

    {element}
  </>
);
