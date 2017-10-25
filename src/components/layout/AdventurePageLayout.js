import React from 'react';
// import NavigationComponent from '../nav/NavigationComponent';

export default function AdventurePageLayout(props) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };

  return (
    <div>
      {props.children[0]}
      <div style={style}>
        {props.children[1]}
        {props.children[2]}
        {props.children[3]}
      </div>
    </div>
  );
}
