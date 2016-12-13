import * as api from '../api/index';

export const notAvailable = (dispatch) => {
  console.log('Not available action');
  dispatch({type: 'ACTION_NOT_AVAILABLE'});
};
