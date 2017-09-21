import React from 'react';
import NavigationComponent from '../nav/NavigationComponent';

export default function AdventurePageLayout(props) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };

  return (
    <div>
      <NavigationComponent />
      <div style={style}>
        {props.children[0]}
        {props.children[1]}
        {props.children[2]}
        {props.children[3]}
      </div>
    </div>
  );
}
