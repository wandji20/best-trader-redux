const createCandleData = (data) => {
  const candles = data.map((entry) => {
    const {
      open, high, low, close, date,
    } = entry;
    return ({
      x: date,
      y: [open, high, low, close],
    });
  });
  return candles.slice(0, 300);
};

export default createCandleData;
