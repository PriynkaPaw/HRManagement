// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import exampleReducer from '../slices/exampleSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
  // Add other reducers here
});

export default rootReducer;
