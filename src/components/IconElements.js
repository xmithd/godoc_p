import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {connect} from 'react-redux';

const IconElements = (props) => {
  return (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Check and Book" />
      <MenuItem primaryText="Storage" />
      <MenuItem primaryText="My Appointments" />
      <MenuItem primaryText="My Profile" />
      <MenuItem primaryText="Logout" onClick={props.logout}/>
    </IconMenu>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: () => { dispatch({type: 'LOG_OUT'}) }
});

export default connect(mapStateToProps, mapDispatchToProps)(IconElements);
