import React from "react";
import {Text, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";

import {RootStackParamList} from "../RouteStackParamList";
import {style} from "../App.style";

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>
}

export default function SplashScreen(props: Props) {

  setTimeout(() => {
    props.navigation.navigate("Counter");
  }, 1000);

  const title = {...style.counterText, fontSize: 48, fontWeight: "bold" as "bold"}
  return (
    <View style={style.view}>
      <Text style={title}>NDRV</Text>
      <Text style={style.counterText}>Mobile Challenge</Text>

    </View>
  );
}