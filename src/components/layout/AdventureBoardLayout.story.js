import React from 'react';
// import { storiesOf } from '@storybook/react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormComponent from '../FormComponent';
import AdventureBoardLayout from '../layout/AdventureBoardLayout';
import DestinationFormComponent from '../destination/DestinationFormComponent';
import AdventureCard from '../adventureboard/AdventureCard'; //import pages
import Paper from 'material-ui/Paper';
import {
  paper,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

let data = {};
storiesOf('Adventure Board Layout', module)
  .addDecorator(muiTheme())
  .add('Happy Path', () =>
    <AdventureBoardLayout>
      <DestinationFormComponent />
      <AdventureCard />
      <FormComponent />
    </AdventureBoardLayout>
  );
