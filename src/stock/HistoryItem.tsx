import {Text} from 'react-native';
import React from 'react';

interface Props {
  date: string;
  value: number;
  color: string;
}

export default function HistoryItem(props: Props) {
  console.log('HistoryItem', props);
  return (
    <Text key={props.date} style={{color: props.color}}>
      {props.date}: {props.value}
    </Text>
  );
}
