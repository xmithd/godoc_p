import React from 'react';
import {connect} from 'react-redux'
import ProfileCard from './ProfileCard';

const SearchResults = ({symptoms, profileList}) => { 
  const styles = {
  };
  return (
    <div>
      <h2>Search Results</h2>
      <p>{symptoms}</p>
      { 
        profileList.map ( (profile, idx) => (
          <ProfileCard key={idx} {...profile} />
        ) )
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  profileList: state.doctorSearch.results,
  symptoms: state.doctorSearch.symptoms
})

export default connect(mapStateToProps, null)(SearchResults);
