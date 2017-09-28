import React from 'react';
import { shallow } from 'enzyme';

import AdventureCard from './AdventureCard.js';

const shallowWrapper = shallow(
  <AdventureCard adventureCard={this.props.adventureCard} />
);

describe('AdventureCard', () => {
  it('input', () => {
    expect(shallowWrapper.find('FormComponent')).toHaveLength(1);
  });
  it('edit and delete Icon Menu', () => {
    expect(shallowWrapper.find('IconMenu')).toHaveLength(2);
  });
});
