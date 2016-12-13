import { combineReducers } from 'redux';

const login = (state = { username: null}, action) => {
  // TODO
  return state;
};

const tabs = (state, action) => {
  if (!state) {
    state = {
      menu: [
        {key: '/home', title: 'Home'},
        {key: '/who-we-are', title: 'who we are'},
        {key: '/what-we-do', title: 'what we do'},
        {key: '/register-log-in', title: 'register/log in'}
      ],
      currentTab: 0
    };

  }
  if (action && action.type === 'TAB_CHANGED') {
    state = {...state, currentTab: action.value};
  }
  return state;
}

export default combineReducers({
  login,
  tabs
});
