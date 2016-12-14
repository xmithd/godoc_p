import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {performSearch} from '../actions/index';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const BookSearchForm = (props) => {
  const styles = {
    block: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButton: {
      marginBottom: 16,
      maxWidth: '100%'
    }
  };
  return (
  <div style={{textAlign: 'center'}}>
    <TextField
    floatingLabelText="Describe Symptoms"
    value={props.symptoms}
    onChange={props.handleChange}/><br />
    <p>Where are they located?</p>
    <div style={styles.block}>
    <RadioButtonGroup name="location" defaultSelected="close_to_me">
      <RadioButton
        value="close_to_me"
        label="Close to me"
        style={styles.radioButton}
      />
      <RadioButton
        value="same_region"
        label="Same region"
        style={styles.radioButton}
      />
      <RadioButton
        value="anywhere"
        label="Anywhere"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    </div>
    <RaisedButton label="go" primary={true} onClick={props.search(props.symptoms)} />
  </div>
)};

const mapStateToProps = (state) => ({
  symptoms: state.doctorSearch.symptoms
})

const mapDispatchToProps = (dispatch) => ({
  handleChange : (e) => { dispatch({type: 'SEARCH_INPUT_CHANGED', value: e.target.value}); },
search: (searchTerm) => () => { dispatch(performSearch(searchTerm)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchForm);
