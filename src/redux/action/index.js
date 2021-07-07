import { FETCH_API_FAILURE, FETCH_API_SUCCESS, FETCH_API_REQUEST } from '../constants';

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

const API_KEY = 'f3e7a6c62566f5327da3a9f3fd13890e';
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

export {
  fetchApiRequest, fetchApiSuccess, fetchApiFailure, fetchMarkets,
};
