import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import userReducer from './userReducer'; // Import from sibling directory

const rootReducer = combineReducers({
  users: userReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
