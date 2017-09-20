import React from 'react';
import Paper from 'material-ui/Paper';
import InputComponent from '../InputComponent';
import AddButtonComponent from '../AddButtonComponent';

const style = {
  height: 100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
  // background-color: red,
};

export default function TravelBoardComponent() {
  return (
    <div style={{ flex: 1, flexDirection: 'row' }}>
      <div>
        <Paper style={style} zDepth={1}>
          <InputComponent />
          <AddButtonComponent />
        </Paper>
      </div>
    </div>
  );
}
