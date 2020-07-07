import React from 'react';
import {Image} from 'react-native';
import {style} from './BackImage.style';

export default function () {
  return <Image source={require('./back3x.png')} style={style.icon} />;
}
