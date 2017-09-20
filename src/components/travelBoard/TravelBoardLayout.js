import React from 'react';
import NavigationComponent from '../nav/NavigationComponent';
// import TravelBoardPageComponent from './TravelBoardPageComponent';

export default function TravelBoardLayout(prop) {
  return (
    <div>
      <NavigationComponent />
      <div className="column">
        {/* <div className=""> */}
        {prop.children[0]}
        {/* </div> */}
        {/* <div className=""> */}
        {prop.children[1]}
        {prop.children[2]}
        {prop.children[3]}
        {prop.children[4]}
        {/* </div> */}
      </div>
    </div>
  );
}
