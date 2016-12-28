/**
 * Created by maiko on 27/12/2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextBook from './TextBook';
import EditTextBookDialog from './EditTextBookDialog';

import { connect } from 'react-redux';
import { setName, setDescription, saveChangesAsync, discardChanges } from '../actions/course';

const styles = {
  textField: { width: '50%' }
};

const CourseCatalog = ({
  name, description, textbooks, onNameChange, onDescriptionChange, onSave, onCancel
}) => (
  <div className="centered-container">
    <Paper className="paper">
      <h1>Discis</h1>
      <Divider />
      <p>
        Hello teacher and welcome to Discis!
        Here you can manage your course information and its required textbooks.
      </p>
      <TextField
        style={styles.textField}
        name="name"
        value={name}
        hintText="Name"
        floatingLabelText="Name"
        autoFocus
        onChange={(e, newValue) => (onNameChange(newValue))}
      />
      <TextField
        style={styles.textField}
        name="description"
        value={description}
        hintText="Description"
        floatingLabelText="Description"
        onChange={(e, newValue) => (onDescriptionChange(newValue))}
      />
      <div className="action-buttons">
        <RaisedButton
          label="Save All Changes"
          primary
          onTouchTap={onSave}
        />
        <FlatButton
          label="Cancel"
          primary
          onTouchTap={onCancel}
        />
      </div>
    </Paper>
    <Paper className="paper">
      <h2>Required textbooks</h2>
      <Divider />
      <List>{
        textbooks.map((textbook, index) => (
          <TextBook key={index} data={textbook} />
        ))
      }</List>
    </Paper>
    <EditTextBookDialog />
  </div>
);


const mapStateToProps = ({ course }) => ({
  name: course.draft.name,
  description: course.draft.description,
  textbooks: course.draft.textbooks,
});

const mapDispatchToProps = dispatch => ({
  onNameChange(name) {
    dispatch(setName(name));
  },
  onDescriptionChange(description) {
    dispatch(setDescription(description));
  },
  onSave() {
    dispatch(saveChangesAsync());
  },
  onCancel() {
    dispatch(discardChanges());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseCatalog);