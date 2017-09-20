import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationComponent from '../nav/NavigationComponent';
import TravelBoardComponent from './TravelBoardComponent';
import TravelBoardLayout from './TravelBoardLayout';

import { paper } from 'material-ui/Card';

storiesOf('TravelBoardComponent', module)
  .addDecorator(muiTheme())
  .add('Travel board', () =>
    <TravelBoardLayout>
      {/* <NavigationComponent /> */}
      <TravelBoardComponent />
      <TravelBoardComponent />
      <TravelBoardComponent />
      <TravelBoardComponent />
    </TravelBoardLayout>
  );
