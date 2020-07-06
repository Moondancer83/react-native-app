import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {LineChart} from 'react-native-line-chart';

import {HistoryData} from '../../service/stockFacade';

interface Props {
  history: Array<HistoryData>;
}

export default function HistoryChart(props: Props) {
  if (props.history.length) {
    return (
      <View>
        <LineChart
          data={{
            labels: props.history.map((item) => item.date),
            datasets: [
              {
                data: props.history.map((item) => item.value),
              },
            ],
          }}
          width={Dimensions.get('window').width - 16} // from react-native
          height={220}
          chartConfig={{
            // backgroundColor: 'black',
            // backgroundGradientFrom: '#fb8c00',
            // backgroundGradientTo: '#ffa726',
            // decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            // style: {
            //   borderRadius: 16
            // }
          }}
          bezier
          style={{
            marginRight: 8,
          }}
        />
      </View>
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
