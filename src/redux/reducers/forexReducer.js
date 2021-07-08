import { FETCH_API_FAILURE, FETCH_API_REQUEST, FETCH_API_SUCCESS } from '../constants';

const initialState = {
  markets: [],
  fetching: false,
  error: '',
};
const forexReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST: {
      return (
        {
          ...state,
          fetching: true,
          error: '',
        }
      );
    }
    case FETCH_API_SUCCESS: {
      return (
        {
          ...state,
          fetching: false,
          markets: action.payload,
        }
      );
    }
    case FETCH_API_FAILURE: {
      return (
        {
          ...state,
          fetching: false,
          markets: [],
          error: action.payload,
        }
      );
    }
    default:
      return { ...state };
  }
};

export default forexReducer;
