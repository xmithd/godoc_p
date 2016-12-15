import React from 'react';
import App from './App';
import LandingPage from './LandingPage';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainMenu from './MainMenu';
import BookSearchForm from './BookSearchForm';
import SearchResults from './SearchResults';
import DoctorDetails from './DoctorDetails';

const Root = () => {
  
  return ( 
  <Router history={ hashHistory } >
    <Route path="/" component={LandingPage}>
    </Route>
    <Route path="/App" component={App}>
      <IndexRoute component={MainMenu} />
      <Route path="book" component={BookSearchForm} />
      <Route path="results" component={SearchResults} />
      <Route path="details" component={DoctorDetails} />
    </Route>
  </Router>
);
}

export default Root;
