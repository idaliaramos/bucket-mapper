import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import DestinationsPageLayout from './DestinationsPageLayout';
import DestinationFormComponent from './DestinationFormComponent';
import DestinationCard from './DestinationCard';

storiesOf('Destinations Page Layout', module)
  .addDecorator(muiTheme())
  .add('Happy Path', () =>
    <DestinationsPageLayout>
      <DestinationFormComponent />
    </DestinationsPageLayout>
  )
  .add('With added destination', () =>
    <DestinationsPageLayout>
      <DestinationFormComponent />
      <DestinationCard />
    </DestinationsPageLayout>
  )
  .add('with multiple destinations', () =>
    <DestinationsPageLayout>
      <DestinationFormComponent />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
    </DestinationsPageLayout>
  );
