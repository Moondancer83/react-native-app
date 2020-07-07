import {StyleSheet} from 'react-native';
import {baseStyles} from '../BaseStyles';

export const style = StyleSheet.create({
  view: {...baseStyles.view, flexDirection: 'column', flex: 1, padding: 10},
  title: {
    ...baseStyles.title,
    marginTop: -50,
    marginBottom: 20,
  },
  body: {
    ...baseStyles.body,
  },
});
