import React from 'react';
import App from './App';
import LandingPage from './LandingPage';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainMenu from './MainMenu';
import BookSearchForm from './BookSearchForm';

const Root = () => {
  
  return ( 
  <Router history={ hashHistory } >
    <Route path="/" component={LandingPage}>
    </Route>
    <Route path="/app" component={App}>
      <IndexRoute component={MainMenu} />
      <Route path="book" component={BookSearchForm}>
      </Route>
    </Route>
  </Router>
);
}

export default Root;
