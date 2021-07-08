import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ ticker }) => (
  <option value={ticker}>
    {ticker}
  </option>
);

Option.propTypes = {
  ticker: PropTypes.string,
};

Option.defaultProps = {
  ticker: '',
};

export default Option;
