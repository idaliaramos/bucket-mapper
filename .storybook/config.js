import { configure } from '@storybook/react';
import 'storybook-addon-material-ui';
// require('../src/index.css');
function loadStories() {
  require('../src/components/adventureboard/AdventureCard.story.js');
  require('../src/components/destination/DestinationFormComponent.story.js');
  require('../src/components/destination/DestinationCard.story.js');
  require('../src/components/destination/DestinationsPage.story.js');
  require('../src/components/FormComponent.story.js');
  require('../src/components/layout/AdventureBoardLayout.story.js');
  // require('../src/components/travelBoard/TravelBoardComponent.story.js');
  require('../src/components/nav/NavigationComponent.story.js');
}
configure(loadStories, module);
