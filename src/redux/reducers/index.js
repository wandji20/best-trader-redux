import { combineReducers } from 'redux';
import forexReducer from './forexReducer';

const rootReducer = combineReducers({ forexReducer });

export default rootReducer;
