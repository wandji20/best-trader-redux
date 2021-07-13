import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Chart from 'react-apexcharts';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import getMarketDetails from '../../redux/action/marketDetailsAction';
import roundDp from '../../helpers/round';

const Details = (props) => {
  const { candleData, getMarketDetails, error } = props;
  const { state } = useLocation();
  const { market } = state;

  const {
    ticker, bid, ask, changes, high, low,
  } = market;

  const marketTag = ticker.split('/').join('');

  useEffect(() => {
    getMarketDetails(marketTag);
  }, []);

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <section className="item details container-fluid pt-3 bg-light ">
      <div className="row">
        <Link
          to="/"
        >
          <button type="button" className="btn btn-info">ALL MARKETS</button>
        </Link>
      </div>
      <div className="d-flex justify-content-center my-5">
        <div className="col-12 col-md-6">
          {
            ticker
              ? (
                <article className="d-flex flex-column bg-dark text-white p-2">
                  <h5>{ticker}</h5>
                  <div className=" d-flex flex-column">
                    <p className="d-flex justify-content-between">
                      <span>
                        Bid:
                        {' '}
                        {roundDp(bid)}
                      </span>
                      <span>
                        Ask:
                        {' '}
                        {roundDp(ask)}
                      </span>
                    </p>
                    <p className="d-flex justify-content-center">
                      {
                        changes > 0
                          ? (
                            <span className="text-info">
                              <FaArrowUp />
                              {' '}
                              {roundDp(changes)}
                            </span>
                          )
                          : (
                            <span className="text-danger">
                              <FaArrowDown />
                              {' '}
                              {roundDp(changes)}
                            </span>
                          )
                      }

                    </p>
                    <p className="d-flex justify-content-between">
                      <span>
                        High:
                        {' '}
                        {roundDp(high)}
                      </span>
                      <span>
                        Low:
                        {' '}
                        {roundDp(low)}
                      </span>
                    </p>
                  </div>
                </article>
              )
              : <div> Nodata to display </div>
          }
        </div>
      </div>
      {
        error === ''
          ? (
            <div id="chart" className="row my-3">
              <Chart
                options={options}
                series={[{ data: candleData }]}
                type="candlestick"
                height={350}
              />
            </div>
          )
          : (
            <div className="row h1 text-danger justify-content-center fs-1">
              {error}
            </div>
          )
      }
    </section>
  );
};

const mapStateToProps = (state) => ({
  error: state.marketDetailsReducer.error,
  candleData: state.marketDetailsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getMarketDetails: (marketTag) => {
    dispatch(getMarketDetails(marketTag));
  },
});

Details.propTypes = {
  error: PropTypes.string.isRequired,
  candleData: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMarketDetails: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
