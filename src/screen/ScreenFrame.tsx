import React, {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';

export default function ScreenFrame<T>(props: PropsWithChildren<T>) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <StatusBar hidden={true} />
      {props.children}
    </KeyboardAvoidingView>
  );
}
