/**
 * Created by maiko on 27/12/2016.
 */
import {
  SET_NAME, SET_DESCRIPTION, SAVE_CHANGES, DISCARD_CHANGES
} from '../constants/actionConstants';
import client from '../api/client';
import HttpStatus from 'http-status-codes';

export const setName = name => ({ type: SET_NAME, name });

export const setDescription = description => ({ type: SET_DESCRIPTION, description });

export const saveChanges = () => ({ type: SAVE_CHANGES });

export const saveChangesAsync = () => (
  (dispatch, getState) => {
    const { course } = getState();
    const courseId = course.draft.id;
    const courseMember = client.one('course', courseId);
    courseMember.put(course).then((response) => {
      if (response.statusCode() === HttpStatus.OK)
        dispatch(saveChanges());
    }, (response) => {
      if (response.statusCode() === HttpStatus.BAD_REQUEST)
        throw new Error('Unable to save the course');
    });
  }
);
export const discardChanges = () => ({ type: DISCARD_CHANGES });
