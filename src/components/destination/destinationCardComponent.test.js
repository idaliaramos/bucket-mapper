import React from 'react';
import { shallow } from 'enzyme';

import DestinationCard from './DestinationCard.js';

const shallowWrapper = shallow(<DestinationCard />);

describe('DestinationCard', () => {
  it('input', () => {
    expect(shallowWrapper.find('input')).toHaveLength(1);
  });
  it('button', () => {
    expect(shallowWrapper.find('FlatButton')).toHaveLength(1);
  });
});
