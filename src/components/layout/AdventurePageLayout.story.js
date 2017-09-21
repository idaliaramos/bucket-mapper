import React from 'react';
// import { storiesOf } from '@storybook/react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import AdventureCard from '../adventureboard/AdventureCard';
import ListCard from '../adventureboard/ListCard';
import FormComponent from '../FormComponent';
import AdventurePageLayout from '../layout/AdventurePageLayout';
// import DestinationFormComponent from '../destination/DestinationFormComponent';

storiesOf('Adventure Board Layout', module)
  .addDecorator(muiTheme())
  .add('Happy Path', () =>
    <AdventurePageLayout>
      <ListCard />
      <FormComponent />
      <AdventureCard />
    </AdventurePageLayout>
  );
