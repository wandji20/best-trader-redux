import filterMarkets from '../helpers/filterMarkets';

const markets = [
  {
    ticker: 'EUR/USD',
    bid: '1.18797',
    ask: '1.18797',
    open: '1.18444',
    low: '1.18250',
    high: '1.18802',
    changes: 0.2980311370774402,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'USD/JPY',
    bid: '110.124',
    ask: '110.124',
    open: '109.749',
    low: '109.732',
    high: '110.260',
    changes: 0.3416887625399776,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'GBP/USD',
    bid: '1.38941',
    ask: '1.38941',
    open: '1.37815',
    low: '1.37554',
    high: '1.38942',
    changes: 0.8170373326561003,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'EUR/GBP',
    bid: '0.85500',
    ask: '0.85500',
    open: '0.85950',
    low: '0.85490',
    high: '0.86014',
    changes: -0.5235602094240907,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'USD/CHF',
    bid: '0.91368',
    ask: '0.91368',
    open: '0.91554',
    low: '0.91359',
    high: '0.91754',
    changes: -0.2031587915328629,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'EUR/JPY',
    bid: '130.826',
    ask: '130.826',
    open: '129.973',
    low: '129.915',
    high: '130.876',
    changes: 0.6562901525701339,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'EUR/CHF',
    bid: '1.08543',
    ask: '1.08543',
    open: '1.08418',
    low: '1.08316',
    high: '1.08681',
    changes: 0.11529450829197858,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'USD/CAD',
    bid: '1.24466',
    ask: '1.24466',
    open: '1.25338',
    low: '1.24464',
    high: '1.25570',
    changes: -0.6957187764285244,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'AUD/USD',
    bid: '0.74936',
    ask: '0.74936',
    open: '0.74306',
    low: '0.74097',
    high: '0.74940',
    changes: 0.847845396064917,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'GBP/JPY',
    bid: '153.008',
    ask: '153.008',
    open: '151.251',
    low: '151.152',
    high: '153.081',
    changes: 1.1616452122630627,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'AUD/CAD',
    bid: '0.93268',
    ask: '0.93268',
    open: '0.93183',
    low: '0.92920',
    high: '0.93534',
    changes: 0.0912183552793864,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'AUD/CHF',
    bid: '0.68468',
    ask: '0.68468',
    open: '0.68040',
    low: '0.67829',
    high: '0.68511',
    changes: 0.629041740152844,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'AUD/JPY',
    bid: '82.522',
    ask: '82.522',
    open: '81.614',
    low: '81.345',
    high: '82.546',
    changes: 1.1125542186389605,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'AUD/NZD',
    bid: '1.07005',
    ask: '1.07005',
    open: '1.06861',
    low: '1.06745',
    high: '1.07164',
    changes: 0.13475449415594892,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'CAD/CHF',
    bid: '0.73408',
    ask: '0.73408',
    open: '0.73048',
    low: '0.72910',
    high: '0.73425',
    changes: 0.49282663454166253,
    date: '2021-07-09 16:01:46',
  },
  {
    ticker: 'CAD/JPY',
    bid: '88.478',
    ask: '88.478',
    open: '87.582',
    low: '87.442',
    high: '88.486',
    changes: 1.0230412641867062,
    date: '2021-07-09 16:01:46',
  },
];
test('Filters markets', () => {
  const market = filterMarkets(markets, 'CAD/JPY', '');
  expect(market).toEqual([{
    ticker: 'CAD/JPY',
    bid: '88.478',
    ask: '88.478',
    open: '87.582',
    low: '87.442',
    high: '88.486',
    changes: 1.0230412641867062,
    date: '2021-07-09 16:01:46',
  }]);
});

test('Returns an empty array when selected market is not valid', () => {
  const market = filterMarkets(markets, 'CAD/JPt', '');
  expect(market).toEqual([]);
});

test('Returns an array of all tickers that begin with input', () => {
  const market = filterMarkets(markets, 'CAD/JPt', '');
  expect(market).toEqual([]);
});

test('Returns an array of all tickers that begin with input', () => {
  const market = filterMarkets(markets, 'CAD', '');
  expect(market).toEqual([
    {
      ticker: 'CAD/CHF',
      bid: '0.73408',
      ask: '0.73408',
      open: '0.73048',
      low: '0.72910',
      high: '0.73425',
      changes: 0.49282663454166253,
      date: '2021-07-09 16:01:46',
    },
    {
      ticker: 'CAD/JPY',
      bid: '88.478',
      ask: '88.478',
      open: '87.582',
      low: '87.442',
      high: '88.486',
      changes: 1.0230412641867062,
      date: '2021-07-09 16:01:46',
    },
  ]);
});
