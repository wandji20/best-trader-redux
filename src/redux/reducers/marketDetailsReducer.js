import {
  FETCH_MARKET_API_FAILURE,
  FETCH_MARKET_API_SUCCESS,
  FETCH_MARKET_API_REQUEST,
} from '../constants';
import createCandleData from '../../helpers/createCandleData';

const initialState = {
  fetching: false,
  data: [],
  error: '',
};
const marketDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKET_API_REQUEST: {
      return {
        ...state,
        fetching: true,
        data: [],
      };
    }
    case FETCH_MARKET_API_SUCCESS: {
      const candleData = createCandleData(action.payload);
      return {
        ...state,
        fetching: false,
        data: candleData,
        error: '',
      };
    }

    case FETCH_MARKET_API_FAILURE: {
      return {
        ...state,
        fetching: false,
        data: [],
        error: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default marketDetailsReducer;
