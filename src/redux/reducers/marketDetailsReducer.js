import {
  FETCH_MARKET_API_FAILURE,
  FETCH_MARKET_API_SUCCESS,
  FETCH_MARKET_API_REQUEST,
} from '../constants';

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
      return {
        ...state,
        fetching: false,
        data: action.payload,
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
