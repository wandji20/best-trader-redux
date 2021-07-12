import {
  FETCH_MARKET_API_FAILURE,
  FETCH_MARKET_API_SUCCESS,
  FETCH_MARKET_API_REQUEST,
} from '../constants';

const fetchMarketApiSuccess = () => ({
  type: FETCH_MARKET_API_SUCCESS,
});

const fetchMarketApiFailure = () => ({
  type: FETCH_MARKET_API_FAILURE,
});

const fetchMarketApiRequst = () => ({
  type: FETCH_MARKET_API_REQUEST,
});

const API_KEY = '8076b7837aeb90bdff5d95b6a81708e8';

const getMarketDetails = (marketTag) => {
  const historicalApi = `https://financialmodelingprep.com/api/v3/historical-chart/5min/${marketTag}?apikey=${API_KEY}`;
  return async (dispatch) => {
    dispatch(fetchMarketApiRequst());
    try {
      const response = await fetch(historicalApi);
      const data = await response.json();
      dispatch(fetchMarketApiSuccess(data));
    } catch (error) {
      dispatch(fetchMarketApiFailure(error));
    }
  };
};

export default getMarketDetails;
