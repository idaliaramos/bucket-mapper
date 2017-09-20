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
  height: 200,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
// _handleClickSwitch(){
//   onSwitch()
// }

export default function AdventureCardNoImage({ onSubmit }) {
  return (
    <Card style={style}>
      {/* <CardMedia overlay={<CardTitle title="Gozalandia" subtitle="" />}>
      <img
        src="http://alivecampus.com/wp-content/uploads/2013/06/Vacation.jpg"
        alt=""
      />
    </CardMedia> */}
      <CardTitle title="Gozalandia" subtitle="" />
      <CardText>
        Add a description of what you would like to do while in this place.
      </CardText>
      <CardActions>
        <FlatButton label="Edit" />
      </CardActions>
    </Card>
  );
}
// export default InitialCard;
