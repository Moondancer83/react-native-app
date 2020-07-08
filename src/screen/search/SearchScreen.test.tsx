import React from 'react';
import renderer, {act} from 'react-test-renderer';

import SearchScreen from './SearchScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/RouteStackParamList';
import {RouteProp} from '@react-navigation/native';
import {style} from './SearchScreen.style';

test('Test SearchScreen input style', () => {
  const navigation:
    | StackNavigationProp<RootStackParamList, 'Search'>
    | any = {};
  const route: RouteProp<RootStackParamList, 'Search'> | any = {};

  const component = renderer.create(
    <SearchScreen navigation={navigation} route={route} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(
    tree.children[1].children[0].children[1].props.style.borderColor,
  ).toEqual('#B2B2B2');

  tree.children[1].children[0].children[1].props.onFocus();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(
    tree.children[1].children[0].children[1].props.style.borderColor,
  ).toEqual('#000000');

  tree.children[1].children[0].children[1].props.onBlur();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(
    tree.children[1].children[0].children[1].props.style.borderColor,
  ).toEqual('#B2B2B2');
});

test('Test SearchScreen button is disabled when input is empty', () => {
  const navigation:
    | StackNavigationProp<RootStackParamList, 'Search'>
    | any = {};
  const route: RouteProp<RootStackParamList, 'Search'> | any = {};

  const component = renderer.create(
    <SearchScreen navigation={navigation} route={route} />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children[2].children[0].props.style.backgroundColor).toEqual(
    style.buttonDisabled.backgroundColor,
  );

  act(() => {
    tree.children[1].children[0].children[1].props.onChangeText('AAPL');
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children[2].children[0].props.style.backgroundColor).toEqual(
    style.button.backgroundColor,
  );

  act(() => {
    tree.children[1].children[0].children[1].props.onChangeText('');
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.children[2].children[0].props.style.backgroundColor).toEqual(
    style.buttonDisabled.backgroundColor,
  );
});
