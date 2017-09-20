import React from 'react';
import FormComponent from '../FormComponent';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import InputComponent from '../InputComponent';
import TextField from 'material-ui/TextField';

//
const style = {
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'block'
};

export default function AdventureCard({ input }) {
  function handleClickSwitch() {
    event.preventDefault();
    console.log('handleClickswitch');
    onSwitch();
  }
  return (
    <Card style={style}>
      <CardMedia overlay={<CardTitle title="Holipali" subtitle="" />}>
        <img
          src="http://tropixtraveler.com/web/wp-content/uploads/2014/12/189-Puerto-Rico-San-Sebastian-Gozalandia-Waterfall-1.jpg"
          alt=""
        />
      </CardMedia>
      {/* <CardTitle title="" subtitle="" /> */}
      <CardText>"you can put your description here"</CardText>
      <CardActions>
        <FlatButton onClick={handleClickSwitch} label="Edit" />
      </CardActions>
    </Card>
  );
}
// export default InitialCard;
