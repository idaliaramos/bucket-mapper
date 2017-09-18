import { configure } from '@storybook/react';
function loadStories() {
  require('../src/components/AdventureBoard/AdventureBoardComponent.story');
}
configure(loadStories, module);
