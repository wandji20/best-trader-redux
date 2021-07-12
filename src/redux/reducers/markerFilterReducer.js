import { FILTER_MARKETS, FILTER_CURRENCY, CURRENT_PAGE } from '../constants';

const initialState = { currency: '', market: '', currentPage: 1 };
const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MARKETS: {
      const market = action.payload === 'All' ? '' : action.payload;
      return {
        ...state,
        market,
        currency: '',
        currentPage: 1,
      };
    }
    case FILTER_CURRENCY: {
      const currency = action.payload === 'All' ? '' : action.payload;
      return {
        ...state,
        currency,
        market: '',
        currentPage: 1,
      };
    }
    case CURRENT_PAGE: {
      return (
        {
          ...state,
          currentPage: action.payload,
          // market: '',
          // currency: '',
        }
      );
    }
    default:
      return { ...state };
  }
};

export default marketReducer;
