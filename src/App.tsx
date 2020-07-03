import React, {useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View,} from 'react-native';
import {style} from "./App.style";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={style.view}>
        <TouchableOpacity onPress={() => {setCount(count + 1)}} style={style.button}>
          <Text style={style.buttonText}>PRESS ME</Text>
        </TouchableOpacity>
        <Text style={style.counterText}>{count}</Text>

      </View>
    </>
  );
};

export default App;
