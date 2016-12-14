import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { notAvailable } from '../actions/index';
import { connect } from 'react-redux';

export const Home = () => (
  <div>
    <p style={{textAlign: 'center'}}>
      Home
    </p>
  </div>
);

export const WhatWeDo = () => (
  <div>
    <p>What we do</p>
  </div>
);

export const WhoWeAre = () => (
  <div>
    <p>Who we are</p>
  </div>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  performLogin : () => { dispatch({type: 'LOG_IN'}) },
  performRegister: () => { dispatch(notAvailable()) }
});

// TODO 
export const LoginRegister = connect(mapStateToProps, mapDispatchToProps)((props) => {
  const style = {
    margin: 12
  };
  return (
    <div style={{textAlign: 'center'}}>
      <RaisedButton label="Login" primary={true} style={style} onClick={props.performLogin}>
      </RaisedButton>
      <br />
      <RaisedButton label="Register" secondary={true} style={style} onClick={props.performRegister}>
      </RaisedButton>
    </div>
    )
  }
);



