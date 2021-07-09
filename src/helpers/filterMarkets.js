const filterMarkets = (markets, selectedMarket, currency) => {
  let newMarkets = [...markets];
  if (currency !== '') {
    newMarkets = markets.filter((market) => market.ticker.includes(currency));
  }
  if (selectedMarket !== '') {
    newMarkets = markets.filter(
      (market) => market.ticker.startsWith(selectedMarket.toUpperCase()),
    );
  }
  return newMarkets;
};

export default filterMarkets;
