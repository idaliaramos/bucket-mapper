import React from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import { ToolbarTitle } from 'material-ui/Toolbar';
import { indigo50 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
const barStyle = {
  display: 'block',
  marginLeft: 0,
  fill: indigo50,
  height: 40,
  width: 24,
  userSelect: 'none',
  color: indigo50
};
export default class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      destinationCards: this.props.destinationCards
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  handleLogout = event => {
    console.log(this.props.history, 'this is the props history');
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };
  handlegotodest = event => {
    event.preventDefault();
    this.props.history.push('/destinations');
  };

  _handleSearch = event => {
    event.preventDefault();
    let $form = event.target;
    let input = $form.input.value;
    this.props.onSearch(input);
  };

  render() {
    console.log(this.state, 'this is the state');

    //check props how can i set it for this one specifically in the state
    // let destinationCard =
    //   Object.assign({}, ...this.props.destinationCards) || '';
    return (
      <Toolbar title="B">
        {/* <Toolbar> */}
        {/* <ToolbarGroup> */}
        <Link to="/destinations">
          {/* {this.props.destinatonCards[0].name
              ? <RaisedButton label="Go To Destinations Board" primary={true} />
              : <RaisedButton label="Destinations Board" primary={true} />} */}
          <FlatButton
            label="Destinations"
            primary={false}
            // onClick={this.handlegotodest}
          />
          {/* <ToolbarTitle
            text={
              this.props.destinationCards.length > 0
                ? this.props.destinationCards[0].name
                : ''
            }
          /> */}
        </Link>
        <ToolbarTitle text="BucketMapper (Maui)" />
        {/* //TODO:fix Search */}
        {/* <form action="" onSubmit={this._handleSearch}>
          <TextField id="input" hintText="Search" style={{ marginLeft: 150 }} />
        </form> */}
        {/* <MenuItem label="Logout" onClick={this.handleLogout} /> */}
        <FlatButton label="Logout" onClick={this.handleLogout} />
        {/* </ToolbarGroup> */}
        {/* </Toolbar> */}
      </Toolbar>
    );
  }
}
