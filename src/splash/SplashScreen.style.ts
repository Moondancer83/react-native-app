import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
  },
  buttonText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },
  counterText: {
    color: 'yellow',
    marginTop: 40,
    fontSize: 36,
  },
});
