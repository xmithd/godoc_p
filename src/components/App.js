import React, { Component } from 'react';
//import logo from '../logo.svg';
//import '../App.css';
import AppBar from 'material-ui/AppBar';
import IconElements from './IconElements';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar style={{flexWrap: 'wrap'}} title="GoDoc" iconElementRight={<IconElements />}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
