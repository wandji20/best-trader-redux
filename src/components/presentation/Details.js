import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Chart from 'react-apexcharts';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import getMarketDetails from '../../redux/action/marketDetailsAction';

const Details = (props) => {
  const { candleData, getMarketDetails } = props;
  // console.log(candleData);
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
    <section className="item details container mt-3 ">
      <div className="row">
        <a href="/">
          <button type="button" className="btn btn-info">ALL MARKETS</button>
        </a>
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
                        {bid}
                      </span>
                      <span>
                        Ask:
                        {' '}
                        {ask}
                      </span>
                    </p>
                    <p className="d-flex justify-content-center">
                      {
                        changes > 0
                          ? (
                            <span className="text-info">
                              <FaArrowUp />
                              {' '}
                              {changes}
                            </span>
                          )
                          : (
                            <span className="text-danger">
                              <FaArrowDown />
                              {' '}
                              {changes}
                            </span>
                          )
                      }

                    </p>
                    <p className="d-flex justify-content-between">
                      <span>
                        High:
                        {' '}
                        {high}
                      </span>
                      <span>
                        Low:
                        {' '}
                        {low}
                      </span>
                    </p>
                  </div>
                </article>
              )
              : <div> Nodata to display </div>
          }
        </div>
      </div>
      <div id="chart" className="row  my-3">
        <Chart
          options={options}
          series={[{ data: candleData }]}
          type="candlestick"
          height={350}
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  candleData: state.marketDetailsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getMarketDetails: (marketTag) => {
    dispatch(getMarketDetails(marketTag));
  },
});

Details.propTypes = {
  candleData: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMarketDetails: PropTypes.func.isRequired,
};

// export default connect(mapStateToProps)(Details);
export default connect(mapStateToProps, mapDispatchToProps)(Details);
