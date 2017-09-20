import React from 'react';
import NavigationComponent from '../nav/NavigationComponent';

export default function AdventureBoardLayout(prop) {
  return (
    <div>
      <NavigationComponent />
      <div>
        {prop.children[0]}
        {prop.children[1]}
        {prop.children[2]}
      </div>
    </div>
  );
}
