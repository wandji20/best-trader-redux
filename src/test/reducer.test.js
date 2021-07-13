import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import forexReducer from '../redux/reducers/forexReducer';
import {
  fetchMarkets, fetchApiRequest, filterByMarketAction, filterByCurrencyAction,
} from '../redux/action';

it('should return the initial state', () => {
  const initialState = {
    markets: [],
    fetching: false,
    error: '',
  };
  expect(forexReducer(undefined, {})).toEqual(initialState);
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([]),
}));

it('should execute fetch data', () => {
  const store = mockStore({});

  return store.dispatch(fetchMarkets('aaa'))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(fetchApiRequest());
    });
});

it('should dispatch action filterByCurrencyAction', () => {
  const initialState = { currency: '', market: '' };
  const store = mockStore(initialState);

  store.dispatch(filterByCurrencyAction());

  const actions = store.getActions();
  expect(actions).toEqual([filterByCurrencyAction()]);
});

it('should dispatch action filterByMarketAction', () => {
  const initialState = { currency: '', market: '' };
  const store = mockStore(initialState);

  store.dispatch(filterByMarketAction());

  const actions = store.getActions();
  expect(actions).toEqual([filterByMarketAction()]);
});
