import React from 'react'
import {connect} from 'react-redux';
import RatingSlider from './RatingSlider';
import SocialPerson from 'material-ui/svg-icons/social/person';

import {Card, CardHeader, CardText, CardMedia } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';

const isDateDisabled = (date) => {
  const weekday = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  // Saturday / Sunday
  if (weekday === 0 || weekday === 6)
    return true;
  const current = new Date();
  // past
  if (date < current) {
    return true;
  }
  // some holidays at the end of the year
  if ( (month === 11 && (day === 31 || day === 24 || day === 25))
      || (month === 0 && (day === 1)) ) {
    return true;
  }
  return false;
};

const DoctorDetails = ({id, name, profession, specialties, location, description, rate, rating, goToBookAppointment}) => {
  const styles = {
    block: { margin: '20px' },
    slider: { maxWidth : '30%' },
    card: {},
    avatar: { width: '100px', height: '100px' },
    description: { textAlign: 'justify' },
    priceTag: { color: 'red' }
  }
  return (
    <div style={styles.block}>
      <h2>Details</h2>
      <Card style={styles.card}>
        <CardHeader
          title={ name }
          subtitle={ `${profession} in ${location}` }
        />
        <CardMedia>
          <SocialPerson style={styles.avatar}/> 
        </CardMedia>
        <CardText>
          Specialties: <br />
          <ul>
            {specialties.map( (it, idx) => (<li key={idx}>{it}</li>) ) } 
          </ul>
          <p style={styles.description}>
          { description }
          </p>
          <p style={styles.priceTag}>
          </p>
          <h4>Ratings</h4> 
          <RatingSlider style={styles.slider} currentValue={rating} />
          <h4>Choose date and time</h4>
          <DatePicker shouldDisableDate={isDateDisabled} hintText="Select Date"/>
          <TimePicker hintText="Pick a time" />
          <RaisedButton onTouchTap={goToBookAppointment} label="Book Appointment" />
        </CardText>
      </Card>
      <h3>Reviews</h3>
      <p>There are no reviews yet.</p>
    </div>
  )
};

const mapStateToProps = (state) => ({
...state.doctorSearch.results[state.doctorSearch.selectedIndex]
});

const mapDispatchToProps = (dispatch) => ({
goToBookAppointment: () => { dispatch({type: 'SHOW_DIALOG', text: 'You will receive an email confirmation shortly', title: 'Book Appointment'}); }
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);
