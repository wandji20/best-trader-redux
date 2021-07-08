import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Option from './Option';
import { filterByCurrencyAction, filterByMarketAction } from '../../redux/action';

const Nav = (props) => {
  const { markets, filterByCurrency, filterByMarket } = props;

  const getMarketPickers = (markets) => markets.map((market) => market.ticker);

  const tickers = getMarketPickers(markets);
  const getCurrency = (tickers) => tickers.map((ticker) => ticker.split('/'));

  const allCurrencies = getCurrency(tickers).flat();
  const currencies = allCurrencies.filter(
    (currency, index) => allCurrencies.indexOf(currency) === index,
  );

  const handleCurrencyChange = (e) => {
    filterByCurrency(e.target.value);
  };

  const handleMarketChange = (e) => {
    filterByMarket(e.target.value);
  };

  return (
    <header className="container remove-padding bg-dark text-white">
      <nav className="container d-flex justify-content-center py-3">
        <div className="d-flex align-items-center justify-content-between w-sm-100 w-75">
          <h5 className="d-none d-md-flex">
            <span className="">
              Best Trader
            </span>
            <span className="d-inline-block fs-6 fw-1">
              TM
            </span>
          </h5>
          <div className="d-flex justify-content-center align-items-center">
            <select
              className="form-select nav-item mx-3"
              onChange={handleMarketChange}
            >
              <option key="All">All</option>
              {
                tickers.map((ticker) => (
                  <Option
                    key={ticker}
                    ticker={ticker}
                  />
                ))
              }
            </select>

            <select
              onChange={handleCurrencyChange}
              className="form-select nav-item mx-3"
            >
              <option key="All">All</option>
              {
                currencies.sort()
                  .map((currency) => (
                    <Option
                      key={currency}
                      ticker={currency}
                    />
                  ))
              }
            </select>
          </div>
        </div>
        <div className="m-auto d-none d-md-block">
          theme switch
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  markets: state.forexReducer.markets,
});

const mapDispatchToProps = (dispatch) => ({
  filterByCurrency: (data) => {
    dispatch(filterByCurrencyAction(data));
  },
  filterByMarket: (data) => {
    dispatch(filterByMarketAction(data));
  },
});

Nav.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByCurrency: PropTypes.func.isRequired,
  filterByMarket: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
