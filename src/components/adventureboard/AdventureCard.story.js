import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AdventureCard from './AdventureCard';
import AdventureCardNoImage from './AdventureCardNoImage';

storiesOf('AdventureCard', module)
  .addDecorator(muiTheme())
  .add('Happy Path', () => <AdventureCard />)
  .add('No Image', () => <AdventureCardNoImage />);
