import React from 'react';
import { Helmet } from 'react-helmet';

import './src/styles/global.css';
import './src/styles/typeface-greycliff.css';

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <html lang="es" dir="ltr" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />

      <script defer data-domain="drsaavedra.mx" src="https://plausible.io/js/script.js"></script>
      <script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="JGUBFEOA" defer></script>
    </Helmet>

    {element}
  </>
);
