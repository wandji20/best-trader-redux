import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Markets from '../components/container/Markets';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Markets /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
