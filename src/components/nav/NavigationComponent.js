import React from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Toolbar,
  ToolbarGroup,
  // ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import {
  indigo50
  // indigo800,
  // purple700
} from 'material-ui/styles/colors';

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
      destinationCard: this.props.destinationCards
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  handleLogout = e => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

  _handleSearch = event => {
    event.preventDefault();
    let $form = event.target;
    let input = $form.input.value;
    this.props.onSearch(input);
  };

  render() {
    console.log(this.props.destinationCards, 'this is the des card');
    //check props how can i set it for this one specifically in the state
    let destinationCard =
      Object.assign({}, ...this.props.destinationCards) || '';
    return (
      <AppBar title="Bucket Mapper">
        {/* <Toolbar> */}
        {/* <ToolbarGroup> */}
        <Link to="/destinations">
          {/* {this.props.destinaton.name
              ? <RaisedButton label="Go To Destinations Board" primary={true} />
              : <RaisedButton label="Destinations Board" primary={true} />} */}
          <RaisedButton label="Destinations" primary={true} />
        </Link>

        <ToolbarTitle
          title={
            <span>
              {/* {destinationCard.name} */}
              Title
            </span>
          }
          style={{ marginLeft: 500 }}
          // text={destinationCard.name}
        />
        <form action="" onSubmit={this._handleSearch}>
          <TextField id="input" hintText="Search" style={{ marginLeft: 150 }} />
        </form>
        <RaisedButton label="Logout" onClick={this.handleLogout} />
        {/* </ToolbarGroup> */}
        {/* </Toolbar> */}
      </AppBar>
    );
  }
}
