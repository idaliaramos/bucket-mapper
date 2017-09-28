import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DestinationFormComponent from './DestinationFormComponent.js';

// const pageTitle = 'Home Page';
// const pages = null;

const shallowWrapper = shallow(<DestinationFormComponent />);

describe('DestinationFormComponent', () => {
  it('TextField', () => {
    expect(shallowWrapper.find('TextField')).toHaveLength(1);
  });
  it('button', () => {
    expect(shallowWrapper.find('RaisedButton')).toHaveLength(1);
  });
});
Enzyme.configure({ adapter: new Adapter() });
