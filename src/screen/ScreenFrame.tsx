import React, {PropsWithChildren} from 'react';
import {Dimensions, SafeAreaView, StatusBar} from 'react-native';

interface Props {
  barStyle?: 'default' | 'dark-content' | 'light-content';
}

export default function ScreenFrame<T>(props: PropsWithChildren<Props & T>) {
  return (
    <SafeAreaView style={{height: Dimensions.get('screen').height}}>
      <StatusBar barStyle={props.barStyle || 'default'} />
      {props.children}
    </SafeAreaView>
  );
}
