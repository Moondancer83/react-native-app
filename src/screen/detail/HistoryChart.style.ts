import {StyleSheet} from 'react-native';
import {baseStyles, colors} from '../BaseStyles';

export const style = StyleSheet.create({
  title: {
    ...baseStyles.body,
    color: colors.gray,
    textAlign: 'center',
    paddingTop: 50,
  },
  placeholder: {
    textAlign: 'center',
    color: colors.gray,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
