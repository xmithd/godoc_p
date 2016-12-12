import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './index.css';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTouchTapEvent from 'react-tap-event-plugin';
import RootReducer from './reducers/index';

// entry point
const main = () => {
  injectTouchTapEvent();

  const store = createStore(RootReducer, applyMiddleware(thunk));

  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Root />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
}

document.addEventListener('DOMContentLoaded', main);
