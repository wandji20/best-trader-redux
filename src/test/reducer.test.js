import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import forexReducer from '../redux/reducers/forexReducer'
import {fetchMarkets, fetchApiSuccess, fetchApiRequest, fetchApiFailure, filterByMarketAction, filterByCurrencyAction} from '../redux/action'

it('should return the initial state', () => {
  const initialState = {
    markets: [],
    fetching: false,
    error: '',
  };
  expect(forexReducer(undefined, {})).toEqual(initialState)
})


const middlewares = [thunk]
const mockStore = configureStore(middlewares)



const API_KEY = '8076b7837aeb90bdff5d95b6a81708e8';
const api = `https://financialmodelingprep.com/api/v3/fx?apikey=${API_KEY}`;

it('should execute fetch data', () => {
  const store = mockStore({})
  
  return store.dispatch(fetchMarkets(api))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(fetchApiRequest())
    })
})


it('should dispatch action filterByCurrencyAction', () => {

  const initialState = { currency: '', market: '' };
  const store = mockStore(initialState)

  store.dispatch(filterByCurrencyAction())

  const actions = store.getActions()
  expect(actions).toEqual([filterByCurrencyAction()])
})

it('should dispatch action filterByMarketAction', () => {

  const initialState = { currency: '', market: '' };
  const store = mockStore(initialState)

  store.dispatch(filterByMarketAction())

  const actions = store.getActions()
  expect(actions).toEqual([filterByMarketAction()])
})

