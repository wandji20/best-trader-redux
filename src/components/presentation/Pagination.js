import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currentPageAction } from '../../redux/action';

const Pagination = (props) => {
  const { markets, handleCurrentPageChange } = props;
  const marketsPerPage = 9;
  const pages = [];

  for (let i = 1; i < Math.ceil(markets.length / marketsPerPage) + 1; i += 1) {
    pages.push(i);
  }
  return (
    <>
      {

        pages.length > 1 && pages.map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => handleCurrentPageChange(page)}
            className="page-number m-1"
          >
            {page}
          </button>
        ))
      }
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleCurrentPageChange: (page) => {
    dispatch(currentPageAction(page));
  },
});

Pagination.propTypes = {
  handleCurrentPageChange: PropTypes.func.isRequired,
  markets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(Pagination);
