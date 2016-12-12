import { combineReducers } from 'redux';
import {hashHistory} from 'react-router';

const login = (state = { username: null}, action) => {
  // TODO
  return state;
};

const tabs = (state, action) => {
  if (!state) {
    state = {
      menu: [
        {link: '/home', title: 'Home'},
        {link: '/who-we-are', title: 'who we are'},
        {link: '/what-we-do', title: 'what we do'},
        {link: '/register-log-in', title: 'register/log in'}
      ]
    };
    //console.log(hashHistory.location);
    if(hashHistory.location) {
      state.currentTab = (val) => (state.menu.findIndex( (element) => element.link === val ) )(hashHistory.location);
    } else {
      state.currentTab = 0;
    }
  }
  if (action && action.type === 'TAB_CHANGED') {
    const to = state.menu[action.value].link;
    if (hashHistory.location !== to)
      hashHistory.push(state.menu[action.value].link);
    state = {...state, currentTab: action.value};
  }
  return state;
}

export default combineReducers({
  login,
  tabs
});
