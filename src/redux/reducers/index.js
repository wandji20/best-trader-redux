import { combineReducers } from 'redux';
import forexReducer from './forexReducer';
import marketReducer from './markerFilterReducer';

const rootReducer = combineReducers({ forexReducer, marketReducer });

export default rootReducer;
