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
import { Link } from 'react-router-dom';

export default class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <Toolbar>
        {/* <ToolbarGroup firstChild={true}> */}
        {/* <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
          </DropDownMenu> */}
        {/* </ToolbarGroup> */}
        <ToolbarGroup>
          {/* <ToolbarTitle text="Options" /> */}
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <Link to="/">
            <RaisedButton label="Go To Destinations Page" primary={true} />{' '}
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
