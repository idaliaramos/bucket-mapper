import React from 'react';
import NavigationComponent from '../nav/NavigationComponent';

export default function DestinationsPageLayout(prop) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };

  return (
    <div>
      <NavigationComponent />
      <div style={style}>
        {prop.children[0]}
        {prop.children[1]}
        {prop.children[2]}
        {prop.children[3]}
        {prop.children[4]}
        {prop.children[5]}
      </div>
    </div>
  );
}
