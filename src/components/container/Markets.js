/* eslint-disable */
import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMarkets } from '../../redux/action';
import Market from '../presentation/Market';
import Nav from '../presentation/Nav';
import filterMarkets from '../../helpers/filterMarkets';
import Pagination from '../presentation/Pagination';

const Markets = (props) => {
  const {
    fetchMarkets, markets, selectedMarket, currency,
  } = props;

  useEffect(() => {
    fetchMarkets();
  }, []);

  const filteredMarkets = filterMarkets(markets, selectedMarket, currency);

  const [marketsPerPage] = useState(9);
  const [pageNumber, setPageNumber] = useState(1);

  const indexOfLastMarket = marketsPerPage * pageNumber;
  const indexOfFirstMarket = indexOfLastMarket - marketsPerPage;
  const currentMarkets = filteredMarkets.slice(indexOfFirstMarket, indexOfLastMarket);

  const paginate  = (pageNumber) => {
    console.log(pageNumber);
    setPageNumber(pageNumber);
  }

  return (
    <>
      <Nav />
      <div className="container-fluid bg-dark">
        <div className="row text-white justify-content-center align-items-center " style={{ background: '#282c34' }}>
          <Pagination marketsPerPage={marketsPerPage} paginate={paginate}/>
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMarkets: () => {
    dispatch(fetchMarkets());
  },
});

const mapStateToProps = (state) => ({
  markets: state.forexReducer.markets,
  selectedMarket: state.marketReducer.market,
  currency: state.marketReducer.currency,
});

Markets.propTypes = {
  fetchMarkets: PropTypes.func.isRequired,
  markets: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedMarket: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Markets);
