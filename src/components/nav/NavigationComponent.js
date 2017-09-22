// import React from 'react';
// import AppBar from 'material-ui/AppBar';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
//
// export default class NavigationComponent extends React.Component {
//   // _handleBarBack = event => {};
//   render() {
//     return (
//       <AppBar title="Destinations Board" onClick={this._handleBarBack}>
//         <div>
//           <IconMenu
//             iconButtonElement={
//               <IconButton>
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
//             targetOrigin={{ horizontal: 'left', vertical: 'top' }}>
//             <MenuItem primaryText="Destinations Page" />
//             <MenuItem primaryText="Home" />
//           </IconMenu>
//         </div>
//       </AppBar>
//     );
//   }
// }
import React from 'react';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import {
  blue500,
  indigo50,
  indigo800,
  purple700
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

  render() {
    console.log(this.props, 'PROPS ON NAVIGATION');
    return (
      <Toolbar style={barStyle}>
        {/* <ToolbarGroup firstChild={true}> */}
        {/* <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
          </DropDownMenu> */}
        {/* </ToolbarGroup> */}
        <ToolbarGroup>
          {/* <ToolbarTitle text={this.props.destination.name} /> */}
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <Link to="/">
            {/* {this.props.destinaton.name
              ? <RaisedButton label="Go To Destinations Board" primary={true} />
              : <RaisedButton label="Destinations Board" primary={true} />} */}
            <RaisedButton label="Home" primary={true} />
          </Link>
          {/* <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }>
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu> */}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
