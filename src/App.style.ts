import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
  view: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "lightgreen",
  },
  buttonText: {
    fontSize: 48,
    fontWeight: "bold"
  },
  counterText: {
    color: "yellow",
    marginTop: 40,
    fontSize: 36
  }
});