import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavigationComponent from './NavigationComponent';

import AppBar from 'material-ui/AppBar';
storiesOf('NavigationComponent', module)
  .addDecorator(muiTheme())
  .add('NavigationComponent', () => <NavigationComponent />);
