import React from 'react';
import {connect} from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const GenericDialog = ({text, title, handleClose, isOpen}) => {
  const actions = [<FlatButton label="OK" primary={true} onTouchTap={handleClose} />]
  return (
  <div>
    <Dialog
      title={title}
      modal={true}
      open={isOpen}
      actions={actions}
      onRequestClose={handleClose}
    >
      {text}
    </Dialog>
  </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.dialog.title,
  isOpen: state.dialog.show,
  text: state.dialog.text
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => { dispatch({ type: 'HIDE_DIALOG' }); }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenericDialog);
