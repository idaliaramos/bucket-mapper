import React from 'react';
import { shallow } from 'enzyme';

import AdventureCardNoImage from './AdventureCardNoImage.js';

const shallowWrapper = shallow(
  <AdventureCardNoImage adventureCard={this.props.adventureCard} />
);

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
