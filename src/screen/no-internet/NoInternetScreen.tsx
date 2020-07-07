import React from 'react';
import {Text, View} from 'react-native';

import {style} from './NoInternetSreen.style';

export default function NoInternetScreen() {
  return (
    <View style={style.view}>
      <Text style={style.title}>No internet connection</Text>
      <Text style={style.body}>
        Application will load when device is connected to the internet.
      </Text>
    </View>
  );
}
