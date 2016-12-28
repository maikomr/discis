/**
 * Created by maiko on 27/12/2016.
 */
import React from 'react';
import ReactDOM  from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import Root from './components/Root';
import course from './reducers/course';
import textBookEditDialog from './reducers/textBookEditDialog';
import initialState from './api/initialState';

injectTapEventPlugin();

const discisStore = createStore(
  combineReducers({ course, textBookEditDialog }),
  initialState,
  applyMiddleware(thunkMiddleware)
);

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={discisStore}>
    <Root />
  </Provider>, app);
