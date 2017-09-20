import React from 'react';
import { blue500, indigo50 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const style = {
  height: 100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: blue500
};
const barStyle = {
  display: 'inline-block',
  marginLeft: 250,
  fill: 'currentcolor',
  height: 0,
  width: 24,
  userSelect: 'none'
};

export default class DestinationCard extends React.Component {
  static defaultProps = {
    onSaveDestination: () => {},
    goToTravelboard: () => {}
  };

  handlePaperClick = event => {
    console.log('i clicked the paper');
    console.log(event);
    this.goToTravelboard(event.id);
  };

  render() {
    const destinationCard = this.props.destinationCard;
    console.log(destinationCard, 'DESTINATIONCARD');
    return (
      <div>
        <Paper style={style} zDepth={1} onClick={this.handlePaperClick}>
          <div
            style={{
              marginTop: 20,
              color: indigo50,
              fontSize: 20,
              verticalAlign: 'middle'
            }}>
            Name
          </div>
          <div />
          <br />
          <IconMenu
            style={barStyle}
            iconButtonElement={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}>
            <MenuItem primaryText="edit" />
            <MenuItem primaryText="delete" />
          </IconMenu>
        </Paper>
      </div>
    );
  }
}
