import React from 'react';
import App from './App';
import LandingPage from './LandingPage';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import * as Pages from './Pages';

const Root = () => ( 
  <Router history={ hashHistory } >
    <Route path="/" component={LandingPage}>
      <IndexRedirect to="/home"/>
      <Route path="/home" component={Pages.Home} />
      <Route path="/who-we-are" component={Pages.WhoWeAre} />
      <Route path="/what-we-do" component={Pages.WhatWeDo} />
      <Route path="/register-log-in" component={Pages.LoginRegister} />
    </Route>
    <Route path="/app" component={App}>
    </Route>
  </Router>
);

export default Root;
