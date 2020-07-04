import React from "react";
import {Text, View} from "react-native";
import {style} from "./CounterView.style";

export default function ResultScreen() {
  return (
    <View style={style.view}>
      <Text style={style.counterText}>Results</Text>
    </View>
  );
}