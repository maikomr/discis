import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CourseCatalog from './CourseCatalog';

const Root = () => (
  <MuiThemeProvider>
    <CourseCatalog />
  </MuiThemeProvider>
);

export default Root;
