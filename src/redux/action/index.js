import {
  FETCH_API_FAILURE,
  FETCH_API_SUCCESS,
  FETCH_API_REQUEST,
  FILTER_CURRENCY,
  FILTER_MARKETS,
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

const API_KEY = '8076b7837aeb90bdff5d95b6a81708e8';
const api = `https://financialmodelingprep.com/api/v3/fx?apikey=${API_KEY}`;

const fetchMarkets = () => async (dispatch) => {
  dispatch(fetchApiRequest());
  try {
    const response = await fetch(api);
    const markets = await response.json();
    dispatch(fetchApiSuccess(markets));
  } catch (error) {
    dispatch(fetchApiFailure({ message: error.message }));
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

export {
  fetchApiRequest,
  fetchApiSuccess,
  fetchApiFailure,
  fetchMarkets,
  filterByCurrencyAction,
  filterByMarketAction,
};
