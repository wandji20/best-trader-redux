import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currentPageAction } from '../../redux/action';

const Pagination = (props) => {
  const { markets, handleCurrentPageChange } = props;
  const marketsPerPage = 9;
  const pages = [];

  for (let i = 1; i < Math.ceil(markets.length / marketsPerPage); i += 1) {
    pages.push(i);
  }
  return (
    <>
      {
        pages.map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => handleCurrentPageChange(page)}
            className="page-number"
          >
            {page}
          </button>
        ))
      }
    </>
  );
};

// const mapStateToProps = (state) => ({
//   markets: state.forexReducer.markets,
// });

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
