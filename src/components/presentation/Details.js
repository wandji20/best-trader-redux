import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Details = (props) => {
  console.log(document.title);
  const { state, pathname } = useLocation();
  console.log(pathname);
  const selectedTicker = state.ticker;
  const { markets } = props;

  const market = markets.filter((market) => (market.ticker === selectedTicker))[0];
  // console.log(markets);
  const {
    ticker, bid, ask, changes, high, low,
  } = market;
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
              )
              : <div> Nodata to display </div>
          }
        </div>
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
