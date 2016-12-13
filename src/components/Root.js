import React from 'react';
import App from './App';
import LandingPage from './LandingPage';
import { Router, Route, hashHistory } from 'react-router';


const Root = () => {
  
  return ( 
  <Router history={ hashHistory } >
    <Route path="/" component={LandingPage}>
    </Route>
    <Route path="/app" component={App}>
    </Route>
  </Router>
);
}

export default Root;
