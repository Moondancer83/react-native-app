import React from 'react';
import renderer from 'react-test-renderer';

import NoInternetScreen from './NoInternetScreen';

test('Test NoInternetScreen against snapshot', () => {
  const component = renderer.create(<NoInternetScreen />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
