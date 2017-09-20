import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DestinationFormComponent from './DestinationFormComponent';

import { paper } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';

storiesOf('DestinationFormComponent', module)
  .addDecorator(muiTheme())
  .add('Onclick change to this', () => <DestinationFormComponent />);
