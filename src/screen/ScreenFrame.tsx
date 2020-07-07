import React, {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import {style} from './ScreenFrame.style';

export default function ScreenFrame<T>(props: PropsWithChildren<T>) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.view}>
      <StatusBar hidden={true} />
      {props.children}
    </KeyboardAvoidingView>
  );
}
