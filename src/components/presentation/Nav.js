import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const { markets } = props;
  const getMarketPickers = (markets) => markets.map((market) => market.ticker);
  const tickers = getMarketPickers(markets);
  // console.log(tickers);
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
            <select className="form-select nav-item mx-3">
              <option key="All">All</option>
              {
                tickers.map((ticker) => (
                  <option key={ticker} value={ticker}>
                    {ticker}
                  </option>
                ))
              }
              {/* <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option> */}
            </select>

            <select className="form-select nav-item mx-3">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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

Nav.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Nav);
