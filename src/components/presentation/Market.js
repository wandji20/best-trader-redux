import React from 'react';
import PropTypes from 'prop-types';

const Market = (props) => {
  const { market } = props;
  const {
    ticker, bid, ask, changes, high, low,
  } = market;
  return (
    <article className="col-sm-6 col-md-4 d-flex flex-column bg-dark text-white border">
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
        <p className="d-flex justify-content-between">
          <button type="button" className="btn btn-success">BUY</button>
          <button type="button" className="btn btn-danger">SELL</button>
          <button type="button" className="btn btn-info">MORE</button>
        </p>
      </div>
    </article>
  );
};

Market.propTypes = {
  market: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Market;
