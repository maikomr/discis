/**
 * Created by maiko on 27/12/2016.
 */
import {
  SELECT_TEXTBOOK,
  SAVE_TEXTBOOK,
  SET_TITLE,
  SET_AUTHOR,
  OPEN_DIALOG,
  CLOSE_DIALOG
} from '../constants/actionConstants';
import { saveChanges } from './course';
import client from '../api/client';
import HttpStatus from 'http-status-codes';

export const openDialog = () => ({ type: OPEN_DIALOG });

export const closeDialog = () => ({ type: CLOSE_DIALOG });

export const selectTextBook = textbook => ({ type: SELECT_TEXTBOOK, textbook });

export const setTitle = title => ({ type: SET_TITLE, title });

export const setAuthor = author => ({ type: SET_AUTHOR, author });

export const saveTextBook = textbook => ({ type: SAVE_TEXTBOOK, textbook });

export const saveTextBookAsync = textbook => (
  (dispatch, getState) => {
    dispatch(saveTextBook(textbook));
    const { course } = getState();
    const courseId = course.draft.id;
    const courseMember = client.one('course', courseId);
    courseMember.put(course).then((response) => {
      if (response.statusCode() === HttpStatus.OK) {
        dispatch(saveChanges());
        dispatch(closeDialog());
      }
    }, (response) => {
      if (response.statusCode() === HttpStatus.BAD_REQUEST) {
        throw new Error('Unable to update textbook');
      }
    });
  }
);
