/**
 * Created by maiko on 27/12/2016.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { connect } from 'react-redux';
import { setTitle, setAuthor, saveTextBookAsync, closeDialog } from '../actions/textBookEditDialog';

const customContentStyle = {
  width: '100%',
  maxWidth: '500px',
};

const EditTextBookDialog = ({ open, textbook, onSave, onCancel, onTitleChange, onAuthorChange }) => {
  const actions = [
    <RaisedButton
      label="Save"
      primary
      onTouchTap={onSave}
    />,
    <FlatButton
      label="Cancel"
      primary
      onTouchTap={onCancel}
    />,
  ];
  return (
    <Dialog
      contentStyle={customContentStyle}
      open={open}
      actions={actions}
    >
      <TextField
        name="title"
        value={textbook.title}
        hintText="Title"
        floatingLabelText="Title"
        autoFocus
        fullWidth
        onChange={(e, newValue) => (onTitleChange(newValue))}
      />
      <TextField
        name="author"
        value={textbook.author}
        hintText="Author"
        floatingLabelText="Author"
        fullWidth
        onChange={(e, newValue) => (onAuthorChange(newValue))}
      />
    </Dialog>
  );
};

const mapStateToProps = ({ textBookEditDialog }) => ({
  open: textBookEditDialog.open,
  textbook: textBookEditDialog.textbook,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { textbook } = stateProps;
  return Object.assign({}, ownProps, stateProps, {
    onSave() {
      dispatch(saveTextBookAsync(textbook));
    },
    onCancel() {
      dispatch(closeDialog());
    },
    onTitleChange(title) {
      dispatch(setTitle(title));
    },
    onAuthorChange(author) {
      dispatch(setAuthor(author));
    }
  });
};

export default connect(mapStateToProps, null, mergeProps)(EditTextBookDialog);