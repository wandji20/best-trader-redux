import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Market = (props) => {
  const { market } = props;
  const {
    ticker, bid, ask, changes, high, low,
  } = market;
  // const params = ticker.split('/').join('');
  return (
    <article id="article" className="col-sm-6 col-md-4 d-flex flex-column bg-dark text-white">
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
          <Link
            to={
                {
                  pathname: '/Details',
                  hash: ticker,
                  state: { ticker },
                }
              }
          >
            <button type="button" className="btn btn-info">MORE</button>
          </Link>
        </p>
      </div>
    </article>
  );
};

Market.propTypes = {
  market: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Market;
