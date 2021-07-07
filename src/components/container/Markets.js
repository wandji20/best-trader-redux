import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMarkets } from '../../redux/action';

const Markets = (props) => {
  const { fetchMarkets, markets } = props;
  useEffect(() => {
    fetchMarkets();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {
          markets.length > 0
            ? markets.map((market) => <div key={market.id} className="col-3">{market.ticker}</div>)
            : <div className="col-6"> Please Reload to see markets</div>
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMarkets: () => {
    dispatch(fetchMarkets());
  },
});

const mapStateToProps = (state) => ({
  markets: state.forexReducer.markets,
});

Markets.propTypes = {
  fetchMarkets: PropTypes.func.isRequired,
  markets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Markets);
