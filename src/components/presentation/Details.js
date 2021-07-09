import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Chart from 'react-apexcharts';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import createCandleData from '../../helpers/createCandleData';

const Details = (props) => {
  const { state } = useLocation();

  const selectedTicker = state.ticker;
  const urlMarketTag = selectedTicker.split('/').join('');

  const API_KEY = '8076b7837aeb90bdff5d95b6a81708e8';

  const historicalApi = `https://financialmodelingprep.com/api/v3/historical-chart/5min/${urlMarketTag}?apikey=${API_KEY}`;

  const [candleData, setCandleData] = useState({ data: [], error: '' });

  useEffect(() => {
    const getCandleData = async () => {
      try {
        const response = await fetch(historicalApi);
        const data = await response.json();

        const createdCandleData = createCandleData(data);

        if (createdCandleData !== []) {
          setCandleData({ data: createdCandleData, error: '' });
        }
      } catch (error) {
        setCandleData({ data: [], error });
      }
    };
    getCandleData();
  }, []);

  const { markets } = props;

  const market = markets.filter((market) => (market.ticker === selectedTicker))[0];

  const {
    ticker, bid, ask, changes, high, low,
  } = market;

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
            selectedTicker
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
          series={[{ data: candleData.data }]}
          type="candlestick"
          height={350}
        />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  markets: state.forexReducer.markets,
});

Details.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Details);
