import React, {PropTypes} from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';

const styles = {
  appBar: {
    flexWrap: 'wrap'
  },
  tabs: {
    width: '100%'
  },
  content: {
    fontSize: 18,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};
const LandingPage = (props) => {
  const tabChanged = (value) => {
    props.tabChanged(value);
  }
  return (
  <div>
  <AppBar title="GoDoc" style={styles.appBar}>
    <Tabs style={styles.tabs} onChange={tabChanged} value={props.currentTab}>
      {
        props.items.map( (item, idx) =>
          (<Tab label={item.title} value={idx} key={idx} />)
        )
      }
    </Tabs>
  </AppBar>
  {props.children}
  </div>
  );
};

const mapStateToProps = (state) => ({
  currentTab: state.tabs.currentTab,
  items: state.tabs.menu
});

const mapDispatchToProps = (dispatch) => ({
  tabChanged : (value) => {
    dispatch({type: 'TAB_CHANGED', value});
  }
});

LandingPage.propTypes = {
  currentTab: PropTypes.number.isRequired,
  tabChanged: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
