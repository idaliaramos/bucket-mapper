import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default function AddButtonComponent() {
  function handleClickAdd() {
    console.log('a am being added');
  }
  return (
    <div>
      {/* <FlatButton onClick={handleClickAdd}label="Cancel" /> */}
      <FlatButton onClick={handleClickAdd} label="Add" primary={true} />
    </div>
  );
}
