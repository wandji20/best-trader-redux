import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const MarketDetails = () => {
  const API_KEY = 'f3e7a6c62566f5327da3a9f3fd13890e';
  const marketTag = 'EURUSD';
  const api = `https://financialmodelingprep.com/api/v3/fx/${marketTag}?apikey=${API_KEY}`;
  const historicalApi = `https://financialmodelingprep.com/api/v3/historical-chart/5min/${marketTag}?apikey=${API_KEY}`;

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

  const createCandleData = (data) => {
    const candles = data.map((entry) => {
      const {
        open, high, low, close, date,
      } = entry;
      return ({
        x: date,
        y: [open, high, low, close],
      });
    });
    return candles.slice(-300);
  };

  const [marketDetails, setMarketDetails] = useState({});
  const [marketDetailsError, setMarketDetailsError] = useState('');

  const [candleData, setCandleData] = useState([]);
  const [candleDataError, setCandleDataError] = useState('');

  // const newData = createCandleData(dailyData.dailyDataDetails);

  useEffect(() => {
    const getMarketDetails = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setMarketDetails(data[0]);
      } catch (error) {
        setMarketDetailsError(error);
      }
    };
    getMarketDetails();
  }, []);

  useEffect(() => {
    const getCandleData = async () => {
      try {
        const response = await fetch(historicalApi);
        const data = await response.json();
        const createdCandleData = createCandleData(data);
        console.log(createdCandleData);
        setCandleData(createdCandleData);
      } catch (error) {
        setCandleDataError(error);
      }
    };
    getCandleData();
  }, []);

  const {
    ticker, bid, ask, changes, high, low,
  } = marketDetails;

  console.log([marketDetailsError, candleDataError]);

  return (
    <section className="item details container mt-3 ">
      <div className="d-flex justify-content-between my-5">
        <div className="col-12 col-md-5">
          <article className="d-flex flex-column bg-dark text-white p-2">
            <h5>{ticker}</h5>
            <div className=" d-flex flex-column">
              <p className="d-flex justify-content-between">
                <span>
                  Bid:
                  {bid}
                </span>
                <span>
                  Ask:
                  {ask}
                </span>
              </p>
              <p className="d-flex justify-content-center">
                arrow
                {changes}
              </p>
              <p className="d-flex justify-content-between">
                <span>
                  High:
                  {high}
                </span>
                <span>
                  Low:
                  {low}
                </span>
              </p>
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6">
          Histogram
        </div>
      </div>
      <div id="chart" className="row">
        <Chart options={options} series={[{ data: candleData }]} type="candlestick" height={350} />
      </div>
    </section>
  );
};

export default MarketDetails;
