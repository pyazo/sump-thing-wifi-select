import React from 'react';
import { Route } from 'react-router-dom';

import ChooseWifi from './ChooseWifi';

const routes = [
  <Route exact path="/" component={ChooseWifi} />,
];

export default routes;
