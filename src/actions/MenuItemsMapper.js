import React from 'react';

const MenuItemsMapper = (dispatch) => ({
goToStorage: () => { dispatch({type: 'SHOW_DIALOG', title: 'Storage', text: 'TODO - storage text'}); },
  goToAppointments: () => { dispatch({type: 'SHOW_DIALOG',
      text: (<div>
              You have no scheduled appointments. <br />
              <strong>Your last annual checkup was more than one year ago.</strong>
            </div>),
      title: 'My Appointments'
      }); },
  goToProfile: () => { dispatch({ type: 'SHOW_DIALOG',
      text: 'TODO - profile text',
      title: 'My Profile'
      }); }
});

export default MenuItemsMapper;
