import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/styles';

import * as themes from 'js/theme';

export default function App({ children }) {
  return (
    <ThemeProvider theme={themes.dark}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  );
}


App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
};
