import {StyleSheet} from 'react-native';
import {baseStyles, colors} from '../BaseStyles';

export const style = StyleSheet.create({
  quote: {
    backgroundColor: 'black',
    paddingRight: 28,
    paddingLeft: 28,
    paddingBottom: 28,
  },
  symbol: {
    ...baseStyles.body,
    color: colors.white,
    marginTop: 15,
    marginBottom: 7,
  },
  name: {
    ...baseStyles.title,
    color: colors.white,
    marginTop: 5,
    marginBottom: 0,
    textTransform: 'capitalize',
  },
  currentPrice: {
    ...baseStyles.title,
    color: colors.white,
    marginBottom: 28,
  },
  table: {
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {flex: 1},
  label: {...baseStyles.body, color: colors.white},
  value: {...baseStyles.title2, color: colors.white},
  history: {
    flex: 1,
    backgroundColor: colors.black,
    borderTopColor: colors.gray,
    borderTopWidth: 1,
    ...baseStyles.view,
  },
});
