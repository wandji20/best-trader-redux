import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMarkets } from '../../redux/action';
import Market from '../presentation/Market';
import Nav from '../presentation/Nav';
import filterMarkets from '../../helpers/filterMarkets';
import Pagination from '../presentation/Pagination';

const Markets = (props) => {
  const {
    fetchMarkets, markets, selectedMarket, currency, currentPage, error,
  } = props;

  useEffect(() => {
    fetchMarkets();
  }, []);

  const filteredMarkets = filterMarkets(markets, selectedMarket, currency);

  const marketsPerPage = 9;

  const indexOfLastMarket = marketsPerPage * currentPage;
  const indexOfFirstMarket = indexOfLastMarket - marketsPerPage;
  const currentMarkets = filteredMarkets.slice(indexOfFirstMarket, indexOfLastMarket);

  return (
    <>
      {
        error === ''
          ? (
            <div className="container">
              <Nav />
              <div>
                <h1>{process.env.API_URL}</h1>
              </div>
              <div className="container-fluid bg-dark">
                <div className="row text-white justify-content-center align-items-center pt-2 " style={{ background: '#282c34' }}>
                  <Pagination markets={filteredMarkets} />
                </div>
                <div className="row">
                  {
                  currentMarkets.length > 0
                    ? currentMarkets.map((market) => {
                      const newMarket = { ...market };
                      newMarket.changes = market.changes.toString();
                      return <Market key={newMarket.ticker} market={newMarket} />;
                    })
                    : <div className="col-6"> Please Reload to see markets</div>
                }
                </div>
              </div>
            </div>
          )
          : (
            <div className="row h1 text-danger justify-content-center fs-1">
              {error}
            </div>
          )
}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMarkets: () => {
    dispatch(fetchMarkets());
  },
});

const mapStateToProps = (state) => ({
  error: state.forexReducer.error,
  currentPage: state.marketReducer.currentPage,
  markets: state.forexReducer.markets,
  selectedMarket: state.marketReducer.market,
  currency: state.marketReducer.currency,
});

Markets.propTypes = {
  error: PropTypes.string.isRequired,
  fetchMarkets: PropTypes.func.isRequired,
  markets: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedMarket: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Markets);
