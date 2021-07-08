import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  const { ticker } = props;
  return (
    <option value={ticker}>
      {ticker}
    </option>
  );
};

Option.propTypes = {
  ticker: PropTypes.string,
};

Option.defaultProps = {
  ticker: '',
};

export default Option;
