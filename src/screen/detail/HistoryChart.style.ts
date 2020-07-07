import {StyleSheet} from 'react-native';
import {baseStyles, colors} from '../BaseStyles';

export const style = StyleSheet.create({
  title: {
    ...baseStyles.body,
    color: colors.gray,
    textAlign: 'center',
  },
  placeholderView: {
    flex: 1,
    ...baseStyles.view,
  },
  placeholder: {
    textAlign: 'center',
    color: colors.gray,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
