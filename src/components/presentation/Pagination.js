import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const { pages } = props;

  return (
    <div className="row justify-content-center">
      {
        pages.map((page) => (
          <span key={page} className="d-inline-block ml-2">
            {page}
          </span>
        ))
      }
    </div>
  );
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Pagination;
