import React from 'react';

import {HistoryData} from './service/stockFacade';
import {ScrollView, Text, View} from 'react-native';
import HistoryItem from './HistoryItem';

interface Props {
  history: Array<HistoryData>;
}

export default function HistoryChart(props: Props) {
  if (props.history.length) {
    return (
      <ScrollView>
        {props.history.map((item: HistoryData) => (
          <HistoryItem
            key={item.date}
            date={item.date}
            value={item.value}
            color={'white'}
          />
        ))}
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          graph goes here
        </Text>
      </View>
    );
  }
}
