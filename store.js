import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import testReducer from './test-reducer';

const reducers = combineReducers({
  testPage: testReducer,
});


// REDUCERS


// ACTIONS

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// trouble win server and client
console.log('store', store.getState());

export function initializeStore() {
  return store;
};
