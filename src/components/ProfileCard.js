import React from 'react';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import {connect} from 'react-redux';

const ProfileCard = ({id, name, specialties, location, profession, description, selectCard}) => {
  const styles = {
    //card: { flexBasis:305, margin: 5 }
  };
  return (
      <Card style={styles.card}>
        <CardHeader
          title={ name }
          subtitle={ `${profession} in ${location}` }
          avatar={<ActionAccountBox />}
          showExpandableButton={true}
        />
        {/*<CardMedia>
          <ActionAccountBox/>
        </CardMedia>*/}
        <CardText expandable={true}>
          Specialties: <br />
          <ul>
            {specialties.map( (it, idx) => (<li key={idx}>{it}</li>) ) } 
          </ul>
          <p>
            {/*description*/}
          </p>
        </CardText>
        <CardActions>
          <RaisedButton label="Select" onClick={selectCard(id)} />
        </CardActions>
      </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectCard: (id) => () => { dispatch({type: 'CARD_SELECTED', id: id}); }
});

export default connect(null, mapDispatchToProps) (ProfileCard);
