/**
 * Created by maiko on 27/12/2016.
 */

import {
  SET_NAME, SET_DESCRIPTION, SAVE_CHANGES, DISCARD_CHANGES, SAVE_TEXTBOOK
} from '../constants/actionConstants';
const defaultState = {
  backend: {
    id: '',
    name: '',
    description: '',
    textbooks: []
  },
  draft: {
    id: '',
    name: '',
    description: '',
    textbooks: []
  }
};

const course = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NAME: {
      return Object.assign({}, state, {
        draft: {
          name: action.name,
          description: state.draft.description,
          textbooks: state.draft.textbooks
        }
      });
    }
    case SET_DESCRIPTION: {
      return Object.assign({}, state, {
        draft: {
          name: state.draft.name,
          description: action.description,
          textbooks: state.draft.textbooks
        }
      });
    }
    case SAVE_CHANGES: {
      return Object.assign({}, state, {
        backend: state.draft
      })
    }
    case DISCARD_CHANGES: {
      return Object.assign({}, state, {
        draft: state.backend
      })
    }
    case SAVE_TEXTBOOK: {
      return Object.assign({}, state, {
        draft: {
          name: state.draft.name,
          description: state.draft.description,
          textbooks: state.draft.textbooks.map(textbook => (
            textbook.id === action.textbook.id ?
              action.textbook : textbook
          ))
        }
      });
    }
    default: return state;
  }
};

export default course;
