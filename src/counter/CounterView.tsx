import React, {useState} from "react";
import {Button, StatusBar, Text, TouchableHighlight, View} from "react-native";
import {style} from "./CounterView.style";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../RouteStackParamList";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Counter'>
}

export default function CounterView(props: Props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={style.view}>
        <View style={style.buttonContainer}>
          <TouchableHighlight style={style.button}>
            <Button title={"PRESS ME"} onPress={() => {setCount(count + 1)}} color={"black"} />
          </TouchableHighlight>
        </View>
        <Text style={style.counterText}>{count}</Text>
        <Button title={"Go to results"} onPress={() => props.navigation.navigate("Results")}/>
      </View>
    </>
  );
}