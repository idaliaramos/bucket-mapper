import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FormComponent from './FormComponent';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// import { paper } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';

storiesOf('FormComponent', module)
  .addDecorator(muiTheme())
  .add('EmptyFormComponent', () => <FormComponent />);
// .add('Onclick change to this', () => <DestinationFormComponent />);
