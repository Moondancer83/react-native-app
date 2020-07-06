import React from 'react';
import {Image} from 'react-native';

export default function () {
  return (
    <Image
      source={require('./back3x.png')}
      style={{width: 15, height: 15, marginLeft: 28}}
    />
  );
}
