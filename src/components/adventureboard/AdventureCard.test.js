import React from 'react';
import { shallow } from 'enzyme';

import AdventureCard from './AdventureCard.js';

const obj = {
  card: ['recnyQoVem3b7MmH6'],
  id: 'rec40e4JFScw8F07X',
  location: 'mexico',
  description: 'text',
  category: 'hike'
};

const shallowWrapper = shallow(<AdventureCard adventureCard={obj} />);

describe('AdventureCard with edit mode true shall find a form component', () => {
  shallowWrapper.setState({ editMode: true });
  it('input', () => {
    expect(shallowWrapper.find('FormComponent')).toHaveLength(1);
  });

  it('should show edit and delete Icon Menu', () => {
    shallowWrapper.setState({ editMode: false });
    expect(shallowWrapper.find('IconMenu')).toHaveLength(1);
  });
  it('edit and delete Icon Menu', () => {
    shallowWrapper.setState({ editMode: true });
    expect(shallowWrapper.find('IconMenu')).toHaveLength(0);
  });
});
