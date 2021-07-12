/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Pagination = (props) => {
  const { marketsPerPage, markets, paginate } = props;
  const pages = [];

  for (let i = 1; i < Math.ceil(markets.length / marketsPerPage); i += 1) {
    pages.push(i);
  }
  return (
    <>
      {
        pages.map((page) => (
          <button
            onClick={() => paginate(page)}
            className="page-number"
          >
            {page}
          </button>
        ))
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  markets: state.forexReducer.markets,
});

Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
  markets: PropTypes.arrayOf(PropTypes.object).isRequired,
  marketsPerPage: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Pagination);
