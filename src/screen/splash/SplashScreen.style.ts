import {Dimensions, StyleSheet} from 'react-native';

const dimension =
  Math.min(Dimensions.get('window').height, Dimensions.get('window').width) *
  0.6;

export const style = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: dimension,
    height: dimension,
  },
});
