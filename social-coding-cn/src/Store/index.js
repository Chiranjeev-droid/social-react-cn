import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import Reducers from '../Reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
let store;
export function configureStore() {
  store = createStore(Reducers, applyMiddleware(thunk));
  console.log('store', store.getState());
  return store;
}
