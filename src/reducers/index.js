import { combineReducers } from 'redux';
import { hashHistory } from 'react-router';

const login = (state = { username: null }, action) => {
  if (action.type === 'LOG_IN') {
    state = { username: 'test_user' }
    hashHistory.push('/App');
  } else if (action.type === 'LOG_OUT') {
    state = { username: null }
    hashHistory.push('/');
  }
  return state;
};

// tabs for landing page
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

const doctorSearch = (state = { symptoms: '', results: [], selectedIndex: -1  }, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGED':
      return {...state, symptoms: action.value};
    case 'SEARCH_SUBMIT_SUCCESS':
      console.log('Search results:', action.results);
      hashHistory.push('/App/results');
      return {...state, results: action.results};
    case 'CARD_SELECTED':
      hashHistory.push('/App/details');
      return {...state, selectedIndex : state.results.findIndex( (it) => action.id === it.id ) }
    default:
      return state;
  }
}

const dialog = (state = { show: false, title: '', text: '' }, action) => {
  switch (action.type) {
    case 'SHOW_DIALOG':
      return {show: true, title: action.title, text: action.text};
    case 'HIDE_DIALOG':
      return {show: false, title: '', text: ''};
    default:
      return state;
  }
};

export default combineReducers({
  login,
  tabs,
  doctorSearch,
  dialog
});
