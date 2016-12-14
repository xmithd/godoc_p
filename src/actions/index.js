import * as api from '../api/index';

export const notAvailable = () => {
  console.log('Action not available');
  return {type: 'ACTION_NOT_AVAILABLE'};
};

export const performSearch = (searchTerm) => async (dispatch) => {
  try {
    console.log('Searching doctors for symptoms', searchTerm);
    const resp = await api.searchNearbyDoctors();
    dispatch({type: 'SEARCH_SUBMIT_SUCCESS', results: resp.data});
  } catch (e) {
    console.log('Error fetching doctor data!');
  }
};
