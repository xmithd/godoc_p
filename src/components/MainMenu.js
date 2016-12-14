import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const MainMenu = () => {
  const style = { margin: 12 };
  return (
  <div style={{textAlign: 'center'}}>
    <RaisedButton primary={true} style={style} label="my profile" 
    icon={<FontIcon className="muidocs-icon-custom-github"/>}/>
    <br />
    <RaisedButton primary={true} style={style} label="book"
    containerElement={<Link to="/App/book"/>}/>
    <br />
    <RaisedButton primary={true} style={style} label="my appointments"/>
    <br />
    <RaisedButton primary={true} style={style} label="my reminders" />
  </div>
  )
};

export default MainMenu;
