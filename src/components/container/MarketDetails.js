import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import Chart from 'react-apexcharts';
// import createCandleData from '../../helpers/createCandleData';

const MarketDetails = () => {
  // console.log(props);
  // const { markets } = props;
  // console.log(markets);
  const { search } = useLocation();

  const urlMarketTag = search.split('=')[1];
  const marketTag = urlMarketTag.split('/').join('');

  const API_KEY = 'f3e7a6c62566f5327da3a9f3fd13890e';

  // const api = `https://financialmodelingprep.com/api/v3/fx/${marketTag}?apikey=${API_KEY}`;
  const historicalApi = `https://financialmodelingprep.com/api/v3/historical-chart/5min/${marketTag}?apikey=${API_KEY}`;

  // const options = {
  //   chart: {
  //     type: 'candlestick',
  //     height: 350,
  //   },
  //   title: {
  //     text: 'CandleStick Chart',
  //     align: 'left',
  //   },
  //   xaxis: {
  //     type: 'datetime',
  //   },
  //   yaxis: {
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  // };

  // const [market, setMarket] = useState({});

  // const selectedMarket = markets.filter((market) => market.ticker === urlMarketTag);
  // if (selectedMarket) {
  //   setMarket(selectedMarket);
  // }

  // console.log(markets);

  // const [candleData, setCandleData] = useState([]);
  // const [candleDataError, setCandleDataError] = useState('');

  useEffect(() => {
    const getCandleData = async () => {
      try {
        console.log('yooo');
        const response = await fetch(historicalApi);
        const data = await response.json();
        console.log(data);
        // const createdCandleData = createCandleData(data);
        // console.log(createdCandleData);
        // if (createdCandleData !== []) {
        //   setCandleData(createdCandleData);
        // }
      } catch (error) {
        console.log(error);
        // setCandleDataError(error);
      }
    };
    getCandleData();
  }, []);

  // console.log(candleData);
  // const {
  //   ticker, bid, ask, changes, high, low,
  // } = market;

  return (
    <section className="item details container mt-3 ">
      <div className="d-flex justify-content-center my-5">
        <div className="col-12 col-md-6">

          {/* <article className="d-flex flex-column bg-dark text-white p-2">
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
          ) */}

        </div>
      </div>
      {/* {
        candleDataError === ''
          ? ( */}
      <div id="chart" className="row">
        lll
        {/* <Chart

               options={options}

               series={[{ data: candleData }]}

               type="candlestick" height={350}

               /> */}
      </div>
      {/* )
          : <div />
      } */}
    </section>
  );
};

// const mapStateToProps = (state) => ({
//   markets: state.forexReducer.markets,
// });

// MarketDetails.propTypes = {
//   markets: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default connect(mapStateToProps)(MarketDetails);
export default MarketDetails;
