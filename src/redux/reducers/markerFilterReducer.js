import { FILTER_MARKETS, FILTER_CURRENCY } from '../constants';

const initialState = { currency: 'All', market: '' };
const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MARKETS: {
      return {
        ...state, market: action.payload,
      };
    }
    case FILTER_CURRENCY: {
      return {
        ...state, currency: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default marketReducer;
