import React from 'react'
import {connect} from 'react-redux';
import RatingSlider from './RatingSlider';
import SocialPerson from 'material-ui/svg-icons/social/person';

import {Card, CardHeader, CardText, CardMedia } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

const DoctorDetails = ({id, name, profession, specialties, location, description, rate, rating}) => {
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
          <h4>Availabilities</h4>
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


export default connect(mapStateToProps, null)(DoctorDetails)
