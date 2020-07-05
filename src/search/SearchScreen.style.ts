import {Dimensions, StyleSheet} from 'react-native';
import {baseStyles, colors} from '../screen/BaseStyles';

const inputStyle = {
  width: '80%',
  height: 40 + 2 * (28 + 6),
  marginTop: 28,
  marginBottom: 28,

  paddingTop: 28,
  paddingBottom: 28,
  lineHeight: 40,

  borderWidth: 1,
  textAlign: 'center' as 'center',
  borderRadius: 3,
  ...baseStyles.title,
};

const errorStyle = {
  paddingTop: 28,
  paddingBottom: 28,
  height: 15 + 2 * 28,
  backgroundColor: colors.white,
};

export const style = StyleSheet.create({
  inputSection: {
    ...baseStyles.view,
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    ...inputStyle,
    borderColor: colors.gray,
  },
  inputFocused: {
    ...inputStyle,
    borderColor: colors.black,
  },
  inputError: {
    ...inputStyle,
    borderColor: colors.red,
  },
  error: errorStyle,
  errorShow: {
    ...errorStyle,
    backgroundColor: colors.red,
  },
  errorText: {
    ...baseStyles.body,
    color: colors.white,
    width: Dimensions.get('window').width,
    textAlign: 'center' as 'center',
  },
  button: {
    padding: 26,
    backgroundColor: colors.black,
  },
  buttonDisabled: {
    padding: 26,
    backgroundColor: colors.lightGray,
  },
  buttonText: {
    ...baseStyles.title2,
    textAlign: 'center',
    color: colors.white,
  },
});
