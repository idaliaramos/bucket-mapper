import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarComponent from '../SearchBarComponent';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Toolbar,
  ToolbarGroup
  // ToolbarSeparator,
  // ToolbarTitle
} from 'material-ui/Toolbar';
import {
  blue500,
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
      destinationCard: props.destinationCard
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  _handleSearch = event => {
    event.preventDefault();
    let $form = event.target;
    let input = $form.input.value;

    this.props.onSearch(input);
  };

  render() {
    console.log(this.props, 'PROPS ON NAVIGATION');
    return (
      <Toolbar>
        <ToolbarGroup>
          <Link to="/">
            {/* {this.props.destinaton.name
              ? <RaisedButton label="Go To Destinations Board" primary={true} />
              : <RaisedButton label="Destinations Board" primary={true} />} */}
            <RaisedButton label="Home" primary={true} />
          </Link>

          <form action="" onSubmit={this._handleSearch}>
            {' '}<TextField
              id="input"
              hintText="Search"
              style={{ marginLeft: 950 }}
            />
          </form>
        </ToolbarGroup>

        {/* <SearchBarComponent style={{ marginLeft: '80%' }} /> */}
      </Toolbar>
    );
  }
}
