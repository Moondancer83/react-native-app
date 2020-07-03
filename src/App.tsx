/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <StatusBar barStyle="default" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <TouchableOpacity onPress={() => {setCount(count + 1)}} style={style.button}>
          <Text style={style.buttonText}>PRESS ME</Text>
        </TouchableOpacity>
        <Text style={style.counterText}>{count}</Text>

      </View>
    </>
  );
};

const style = StyleSheet.create({
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
    color: "red",
    marginTop: 40,
    fontSize: 36
  }
});

export default App;
