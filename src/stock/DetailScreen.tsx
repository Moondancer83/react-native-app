import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {RouteProp} from "@react-navigation/native";

import {RootStackParamList} from "../routes/RouteStackParamList";
import ScreenFrame from "./ScreenFrame";

interface Props {
  route: RouteProp<RootStackParamList, 'Detail'>
}

export default function DetailScreen(props: Props) {
  const { stock } = props.route.params;
  return (
    <ScreenFrame barStyle={"light-content"}>
      <View>
        <Text>{stock.symbol}</Text>
        <Text>{stock.name}</Text>
        <Text>{stock.priceCurrent}</Text>

        <Text>Open {stock.priceOpening}</Text>
        <Text>High {stock.priceHeight}</Text>
        <Text>Low {stock.priceLow}</Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>
        <Text>graph goes here ({Object.keys(stock.history).length})</Text>
      </View>
    </ScreenFrame>
  );
}
