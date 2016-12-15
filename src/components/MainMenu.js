import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import MenuItemsMapper from '../actions/MenuItemsMapper';

const MainMenu = ({goToStorage, goToAppointments, goToProfile, goToAppleTip}) => {
  const style = { margin: 12 };
  return (
  <div style={{textAlign: 'center'}}>
    <RaisedButton primary={true} style={style} label="Check and Book"
    containerElement={<Link to="/App/book"/>}/>
    <br />
    <RaisedButton primary={true} style={style} label="Storage" onTouchTap={goToStorage}/>
    <br />
    <RaisedButton primary={true} style={style} label="My Appointments" onTouchTap={goToAppointments}/>
    <br />
    <RaisedButton primary={true} style={style} label="My Profile" onTouchTap={goToProfile} />
    <br />
    <RaisedButton style={style} label="Apple tip of the day" backgroundColor="#ff4081" onTouchTap={goToAppleTip}/>
  </div>
  )
};

// MenuItemsMapper is mapDispatchToProps..
export default connect(null, MenuItemsMapper)(MainMenu);
