import createCandleData from '../helpers/createCandleData';

const response = [
  {
    x: "2021-07-02 03:55:00",
    y: [1.3756, 1.37605, 1.3751, 1.37594],
  },
];

const data = [
  {
    close: 1.37594,
    date: '2021-07-02 03:55:00',
    high: 1.37605,
    low: 1.3751,
    open: 1.3756,
    volume: 573,
  },
];

test('Returns an array of all data containing objects with keys x and y', () => {
  const points = createCandleData(data);
  expect(points).toEqual(response);
});

// const createCandleData = (data) => {
//   const candles = data.map((entry) => {
//     const {
//       open, high, low, close, date,
//     } = entry;
//     return ({
//       x: date,
//       y: [open, high, low, close],
//     });
//   });
//   return candles.slice(0, 300);
// };
