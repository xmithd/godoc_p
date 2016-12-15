import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {connect} from 'react-redux';
import MenuItemsMapper from '../actions/MenuItemsMapper';

import { Link } from 'react-router';

const IconElements = (props) => {
  return (
    <IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Check and Book" containerElement={<Link to="/App/book" />} />
      <MenuItem primaryText="Storage" onTouchTap={props.goToStorage} />
      <MenuItem primaryText="My Appointments" onTouchTap={props.goToAppointments}/>
      <MenuItem primaryText="My Profile" onTouchTap={props.goToProfile} />
      <MenuItem primaryText="Logout" onTouchTap={props.logout}/>
    </IconMenu>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  ...MenuItemsMapper(dispatch),
  logout: () => { dispatch({type: 'LOG_OUT'}) }
});

export default connect(mapStateToProps, mapDispatchToProps)(IconElements);
