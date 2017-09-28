import React from 'react';
import { shallow } from 'enzyme';

import AdventureCardNoImage from './AdventureCardNoImage.js';
const obj = {
  card: ['recnyQoVem3b7MmH6'],
  id: 'rec40e4JFScw8F07X',
  location: 'mexico',
  body: 'text',
  category: 'hike',
  image: undefined
};
const shallowWrapper = shallow(<AdventureCardNoImage adventureCard={obj} />);

describe('AdventureCardNoImage', () => {
  it('title', () => {
    expect(shallowWrapper.find('CardTitle')).toHaveLength(1);
  });
  it('body', () => {
    expect(shallowWrapper.find('CardText')).toHaveLength(1);
  });
  it('button', () => {
    expect(shallowWrapper.find('FlatButton')).toHaveLength(1);
  });
});
