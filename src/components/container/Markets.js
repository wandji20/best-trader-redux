import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMarkets } from '../../redux/action';
import Market from '../presentation/Market';

const Markets = (props) => {
  const { fetchMarkets, markets } = props;
  useEffect(() => {
    fetchMarkets();
  }, []);
  return (
    <div className="container px-1 mt-5">
      <div className="row">
        {
          markets.length > 0
            ? markets.map((market) => {
              const newMarket = { ...market };
              newMarket.changes = market.changes.toString();
              return <Market key={newMarket.ticker} market={newMarket} />;
            })
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
