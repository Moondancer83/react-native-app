import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {LineChart} from 'react-native-line-chart';

import {HistoryData} from '../../service/stockFacade';
import {baseStyles, colors} from '../BaseStyles';

interface Props {
  history: Array<HistoryData>;
  height: number;
}

export default function HistoryChart(props: Props) {
  console.log('DATA', props.history.length);
  console.log('HEIGHT', props.height);

  if (props.history.length) {
    return (
      <>
        <Text
          style={{
            ...baseStyles.body,
            color: colors.gray,
            textAlign: 'center',
          }}>
          Closing values over the last year
        </Text>
        <LineChart
          data={{
            labels: props.history.map((item) => item.date),
            datasets: [
              {
                data: props.history.map((item) => item.value),
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={props.height}
          chartConfig={{
            fillShadowGradient: 'white',
            fillShadowGradientOpacity: 1,
            color: () => 'rgba(255, 255, 255, 1)',
          }}
          bezier
        />
      </>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          ...baseStyles.view,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.gray,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          graph is loading
        </Text>
      </View>
    );
  }
}
