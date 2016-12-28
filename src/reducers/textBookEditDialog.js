/**
 * Created by maiko on 27/12/2016.
 */
import { SELECT_TEXTBOOK, SET_TITLE, SET_AUTHOR, OPEN_DIALOG, CLOSE_DIALOG } from '../constants/actionConstants';

const defaultState = {
  open: false,
  textbook: {
    id: '',
    title: '',
    author: ''
  },
};

const textBookEditDialog = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_TEXTBOOK: {
      return Object.assign({}, state, { textbook: action.textbook });
    }
    case SET_TITLE: {
      return Object.assign({}, state, {
        textbook: {
          id: state.textbook.id,
          title: action.title,
          author: state.textbook.author
        }
      });
    }
    case SET_AUTHOR: {
      return Object.assign({}, state, {
        textbook: {
          id: state.textbook.id,
          title: state.textbook.title,
          author: action.author
        }
      });
    }

    case OPEN_DIALOG: {
      return Object.assign({}, state, { open: true });
    }
    case CLOSE_DIALOG: {
      return defaultState;
    }
    default: return state;
  }
};

export default textBookEditDialog;