import React from 'react';
import { Helmet } from 'react-helmet';

import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
    </Helmet>

    {element}
  </>
);
