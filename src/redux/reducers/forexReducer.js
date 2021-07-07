import { FETCH_API_FAILURE, FETCH_API_SUCCESS } from '../constants';

const initialState = { markets: [] };
const forexReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_SUCCESS: {
      return (
        {
          ...state,
        }
      );
    }
    case FETCH_API_FAILURE: {
      return (
        {
          ...state,
        }
      );
    }
    default:
      return { ...state };
  }
};

export default forexReducer;
