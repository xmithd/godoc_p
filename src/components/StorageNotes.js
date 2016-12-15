import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const StorageNotes = ({goToMedicineReminders, goToSavedNotes}) => (
  <div>
    <ul>
      <li><RaisedButton label="Medicine Reminders" onTouchTap={goToMedicineReminders}/></li><br />
      <li>X-ray Scan - October 22nd, 2008</li> <br />
      <li>Annual check-up results - December 1st, 2015</li><br />
      <li><RaisedButton label="Saved Notes" onTouchTap={goToSavedNotes} /></li><br />
    </ul>
  </div>
);

export const mapDispatchToProps = (dispatch) => ({
  goToMedicineReminders: () => {
    dispatch({type: 'SHOW_DIALOG',
        title: 'Medicine Reminders',
        text: (
            <div>
              Reminders set for Monday, Wednesday, and Friday for: <br />
              <ul>
                <li><span style={{color: 'red'}}>Plavix</span> - 2:15 PM </li>
                <li>Ticlid - 9:15 PM </li>
              </ul>
              <p style={{color: 'red'}}>
                Your Plavix medication is scheduled to end on January 25th. Please click <a href="#/App">here</a> to notify Dr. Wong for a refill.
              </p>
            </div>
        )
    });
  },
  goToSavedNotes: () => {
    dispatch({
      type: 'SHOW_DIALOG',
      title: 'Saved Notes',
      text: (
          <div>
            <ul>
              <li>Get Heart EKG test next year. </li>
              <li>Tell doctor about stiff pain in shoulder during next check-up. </li>
              <li>Tell Maria how good Dr. Wong is!</li>
            </ul>
          </div>
      )
    });
  }
});

export default connect(null, mapDispatchToProps) (StorageNotes);
