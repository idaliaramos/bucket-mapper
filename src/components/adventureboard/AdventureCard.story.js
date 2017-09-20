import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AdventureCard from './AdventureCard';
import AdventureCardNoImage from './AdventureCardNoImage';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
<RaisedButton label="Primary" primary={true} />;
storiesOf('AdventureCard', module)
  .addDecorator(muiTheme())
  .add('Happy Path', () => <AdventureCard />)
  .add('No Image', () => <AdventureCardNoImage />);
