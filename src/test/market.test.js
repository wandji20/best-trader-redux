import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Market from '../components/presentation/Market';

const market = {
  ticker: 'CAD/JPY',
  bid: '88.478',
  ask: '88.478',
  open: '87.582',
  low: '87.442',
  high: '88.486',
  changes: '1.0230412641867062',
  date: '2021-07-09 16:01:46',
};

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Market market={market} /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
