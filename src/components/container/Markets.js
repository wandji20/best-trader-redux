/*eslint-disable */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMarkets } from '../../redux/action';

const Markets = (props) => {
  const { fetchMarkets } = props;
  useEffect(() => {
    fetchMarkets();
  }, []);
  return (
    <div className="container">
      All markets
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMarkets: () => {
    dispatch(fetchMarkets());
  },
});

export default connect(null, mapDispatchToProps)(Markets);
