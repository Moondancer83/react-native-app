import React from 'react';
import {Dimensions, Text} from 'react-native';
import {LineChart} from 'react-native-line-chart';

import {HistoryData} from '../../service/stockFacade';
import {style} from './HistoryChart.style';

interface Props {
  history: Array<HistoryData>;
  height: number;
}

export default function HistoryChart(props: Props) {
  if (props.history.length) {
    return (
      <>
        <Text style={style.title}>Closing values over the last year</Text>
        <LineChart
          data={{
            labels: props.history.map((item) => item.date),
            datasets: [
              {
                data: props.history.map((item) => item.value),
              },
            ],
          }}
          width={Dimensions.get('window').width}
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
    return <Text style={style.placeholder}>graph is loading</Text>;
  }
}
