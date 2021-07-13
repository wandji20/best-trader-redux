import { combineReducers } from 'redux';
import forexReducer from './forexReducer';
import marketReducer from './markerFilterReducer';
import marketDetailsReducer from './marketDetailsReducer';

const rootReducer = combineReducers({ forexReducer, marketReducer, marketDetailsReducer });

export default rootReducer;
