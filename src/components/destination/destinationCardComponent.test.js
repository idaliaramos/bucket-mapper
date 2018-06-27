import React from 'react';
import { shallow } from 'enzyme';

import DestinationCard from './DestinationCard.js';
const onUpdateDestination = jest.fn();
const onDeleteDestination = jest.fn();
const obj = {
  card: ['recnyQoVem3b7MmH6'],
  id: 'rec40e4JFScw8F07X',
  name: 'mexico',
  nid: 90
};
const shallowWrapper = shallow(
  <DestinationCard
    onDeleteDestination={onDeleteDestination}
    onUpdateDestination={onUpdateDestination}
    destinationCard={obj}
  />
);

describe('DestinationCard', () => {
  it('should return a wrapper with editmode state being true', () => {
    shallowWrapper.setState({ editMode: true });
    expect(shallowWrapper.find('#name')).toHaveLength(1);
  });
  it('should return a wrapper with editmode state being false', () => {
    shallowWrapper.setState({ editMode: false });
    expect(shallowWrapper.find('#name')).toHaveLength(0);
  });
  it('button', () => {
    shallowWrapper.setState({ editMode: true });
    expect(shallowWrapper.find('FlatButton')).toHaveLength(1);
    // expect(shallowWrapper)
  });
  // it('onClick', () => {
  //   shallowWrapper.setState({ editMode: false });
  //   shallowWrapper.find('#edit').simulate('click');
  //   expect(onUpdateDestination).toHaveBeenCalled();
  // });
  it('onClick', () => {
    shallowWrapper.setState({ editMode: false });
    shallowWrapper.find('#delete').simulate('click');
    expect(onDeleteDestination).toHaveBeenCalled();
  });
});

// example with preventDefault
// it('Triggers onSelect', () => {
//     const onSelect = jest.fn();
//     const wrapper = shallow(<NoteListItem note={note} onSelect={onSelect} />);
//     wrapper
//       .find('.NoteListItem-clickable')
//       .simulate('click', { preventDefault: () => {} });
//     expect(onSelect).toBeCalled();
//   });
