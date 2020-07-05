import {StyleSheet} from 'react-native';

export const colors = {
  white: '#FFFFFF',
  lightGray: '#E5E5E5',
  gray: '#B2B2B2',
  black: '#000000',
  red: '#F65141',
};

const fontFamily = 'Avenir Next';
const fontWeightNormal = '500' as '500';
const fontWeightDemiBold = '600' as '600';

export const baseStyles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily,
    fontWeight: fontWeightDemiBold,
    fontSize: 28,
  },
  title2: {
    fontFamily: fontFamily,
    fontWeight: fontWeightDemiBold,
    fontSize: 17,
  },
  body: {
    fontFamily: fontFamily,
    fontWeight: fontWeightNormal,
    fontSize: 15,
  },
  darkContent: {
    color: 'black',
  },
  lightContent: {
    color: 'white',
  },
});
