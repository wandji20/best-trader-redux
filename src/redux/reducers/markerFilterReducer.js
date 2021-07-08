import { FILTER_MARKETS, FILTER_CURRENCY } from '../constants';

const initialState = { currency: '', market: '' };
const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MARKETS: {
      const market = action.payload === 'All' ? '' : action.payload;
      return {
        ...state,
        market,
      };
    }
    case FILTER_CURRENCY: {
      const currency = action.payload === 'All' ? '' : action.payload;
      return {
        ...state,
        currency,
      };
    }
    default:
      return { ...state };
  }
};

export default marketReducer;
