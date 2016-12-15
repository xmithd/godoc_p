import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import MenuItemsMapper from '../actions/MenuItemsMapper';

const MainMenu = ({goToStorage, goToAppointments, goToProfile}) => {
  const style = { margin: 12 };
  return (
  <div style={{textAlign: 'center'}}>
    <RaisedButton primary={true} style={style} label="Check and Book"
    containerElement={<Link to="/App/book"/>}/>
    <br />
    <RaisedButton primary={true} style={style} label="Storage" onClick={goToStorage}/>
    <br />
    <RaisedButton primary={true} style={style} label="My Appointments" onClick={goToAppointments}/>
    <br />
    <RaisedButton primary={true} style={style} label="My Profile" onClick={goToProfile} />
  </div>
  )
};

// MenuItemsMapper is mapDispatchToProps..
export default connect(null, MenuItemsMapper)(MainMenu);
