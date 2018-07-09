import React from 'react';
 import NavigationComponent from '../nav/NavigationComponent';

export default function AdventurePageLayout(prop) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 35
  };
  //
  // const style = {
  //   // height: 100,
  //   width: 300,
  //   margin: 30,
  //   // textAlign: 'center',
  //   display: "block"
  // }

  return (
    <div>
      <NavigationComponent {...prop} />
      <div style={style}>
        {prop.children[0]}
        {prop.children[1]}
        {prop.children[2]}
      </div>
    </div>
  );
}
