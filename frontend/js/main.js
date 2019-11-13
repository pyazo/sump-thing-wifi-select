/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import routes from './routes';


render(
  <Router>
    <App>
      { routes }
    </App>
  </Router>,
  document.getElementById('root')
);
