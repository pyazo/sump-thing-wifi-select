import React from 'react';
import { Route } from 'react-router-dom';

import ChooseWifi from './ChooseWifi';
import Connected from './Connected';

export default function routes() {
  return (
    <>
      <Route exact path="/" component={ChooseWifi} />
      <Route exact path="/connected" component={Connected} />
    </>
  );
}
