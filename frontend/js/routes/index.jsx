import React from 'react';
import { Route } from 'react-router-dom';

import ChooseWifi from './ChooseWifi';

export default function routes() {
  return (
    <>
      <Route exact path="/" component={ChooseWifi} />
    </>
  );
}
