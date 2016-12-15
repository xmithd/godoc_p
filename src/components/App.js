import React, { Component } from 'react';
//import logo from '../logo.svg';
//import '../App.css';
import AppBar from 'material-ui/AppBar';
import IconElements from './IconElements';
import GenericDialog from './GenericDialog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
        style={{flexWrap: 'wrap'}}
        title="GoDoc"
        iconElementRight={<IconElements />}
        iconElementLeft={<img src="/data/godoc.png" height="50" width="50"/>}
        />
        <GenericDialog />
        {this.props.children}
      </div>
    );
  }
}

export default App;
