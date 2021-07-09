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
    return ([{ data: candles.slice(-300) }]);
  };

  const [market, setMarket] = useState({ marketDetails: [], marketError: '' });
  const [dailyData, setDailyData] = useState({ dailyDataDetails: [], dailyDataError: '' });
  const newData = createCandleData(dailyData.dailyDataDetails);

  useEffect(() => {
    const getMarketInfo = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setMarket({ ...market, marketDetails: data[0] });
      } catch (error) {
        setMarket({ ...market, marketError: error });
      }
    };
    getMarketInfo();
  }, []);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await fetch(historicalApi);
        const data = await response.json();
        setDailyData(
          {
            ...dailyData,
            dailyDataDetails: data,
          },
        );
      } catch (error) {
        setDailyData(
          {
            ...dailyData,
            dailyDataError: error,
          },
        );
      }
    };
    getHistory();
  }, []);

  console.log([dailyData, market]);
  return (
    <section className="item details container mt-3 ">
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-6">
          display market info
        </div>
      </div>
      <div id="chart" className="row">
        <Chart options={options} series={newData} type="candlestick" height={350} />
      </div>
    </section>
  );
};

export default MarketDetails;
