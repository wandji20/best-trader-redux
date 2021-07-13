import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Nav from '../components/presentation/Nav';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Nav /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
