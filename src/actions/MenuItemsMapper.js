import React from 'react';
import StorageNotes, {mapDispatchToProps} from '../components/StorageNotes';
import RaisedButton from 'material-ui/RaisedButton';

const MenuItemsMapper = (dispatch) => {
  const importedItems = mapDispatchToProps(dispatch);
  return ({
  goToStorage: () => { dispatch({type: 'SHOW_DIALOG',
      title: 'Storage',
      text: (<StorageNotes />)
      }); },

  goToAppointments: () => { dispatch({type: 'SHOW_DIALOG',
      text: (<div>
              You have no scheduled appointments. <br />
              <strong>Your last annual check-up was more than one year ago.</strong>
            </div>),
      title: 'My Appointments'
      }); },
  goToProfile: () => { dispatch({ type: 'SHOW_DIALOG',
      title: 'My Profile',
      text: (
          <div>
            Name: Henry Ma <br />
            Age: 33 <br />
            Weight at last check-up: 68 kg <br />
            <RaisedButton label="My Medicine Reminders" onTouchTap={importedItems.goToMedicineReminders} /> <br /> <br />
            <RaisedButton label="My Notes" onTouchTap={importedItems.goToSavedNotes} /> <br />
            Share with Dr. Zhou? <span><RaisedButton label="Yes" /> <RaisedButton label="no" /></span> <br />
          </div>
      )
      }); },

  goToAppleTip: () => { dispatch({ type: 'SHOW_DIALOG',
      title: 'An apple a day keeps the doctor away',
      text: (<div>
          Follow these tips to stay well this Winter.<br /><br />
          Tonight will be a cold night. Remember to wear a jacket and stay warm!
        </div>)
    })
  }
}
);
};
export default MenuItemsMapper;
