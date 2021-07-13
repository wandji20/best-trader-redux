import {
  FETCH_API_FAILURE,
  FETCH_API_SUCCESS,
  FETCH_API_REQUEST,
  FILTER_CURRENCY,
  FILTER_MARKETS,
  CURRENT_PAGE,
} from '../constants';

const fetchApiRequest = () => ({
  type: FETCH_API_REQUEST,
});

const fetchApiSuccess = (markets) => ({
  type: FETCH_API_SUCCESS,
  payload: markets,
});

const fetchApiFailure = (error) => ({
  type: FETCH_API_FAILURE,
  payload: error,
});

const { REACT_APP_API_KEY } = process.env;

const api = `https://financialmodelingprep.com/api/v3/fx?apikey=${REACT_APP_API_KEY}`;

const fetchMarkets = () => async (dispatch) => {
  dispatch(fetchApiRequest());
  try {
    const response = await fetch(api);
    const markets = await response.json();
    dispatch(fetchApiSuccess(markets));
  } catch (error) {
    dispatch(fetchApiFailure(error.message));
  }
};

const filterByCurrencyAction = (currency) => ({
  type: FILTER_CURRENCY,
  payload: currency,
});

const filterByMarketAction = (market) => ({
  type: FILTER_MARKETS,
  payload: market,
});

const currentPageAction = (page) => ({
  type: CURRENT_PAGE,
  payload: page,
});

export {
  fetchApiRequest,
  fetchApiSuccess,
  fetchApiFailure,
  fetchMarkets,
  filterByCurrencyAction,
  filterByMarketAction,
  currentPageAction,
};
