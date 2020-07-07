import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../../routes/RouteStackParamList';
import ScreenFrame from '../ScreenFrame';
import {getHistoricalData, HistoryData} from '../../service/stockFacade';
import HistoryChart from './HistoryChart';
import {baseStyles, colors} from '../BaseStyles';

interface Props {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

export default function DetailScreen(props: Props) {
  const [history, setHistory] = useState<Array<HistoryData>>([]);
  const [viewHeight, setViewHeight] = useState<number>(0);

  const {stock} = props.route.params;

  async function loadHistory() {
    console.log('DetailScreen.load');
    const data: {
      error: boolean;
      history: Array<HistoryData>;
    } = await getHistoricalData(stock.symbol);
    setHistory(data.history);
  }

  useEffect(() => {
    loadHistory();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ScreenFrame>
      <View
        style={{
          backgroundColor: 'black',
          paddingRight: 28,
          paddingLeft: 28,
          paddingBottom: 28,
        }}>
        <Text
          style={{
            ...baseStyles.body,
            color: colors.white,
            marginTop: 15,
            marginBottom: 7,
          }}>
          {stock.symbol}
        </Text>
        <Text
          style={{
            ...baseStyles.title,
            color: colors.white,
            marginTop: 5,
            marginBottom: 0,
            textTransform: 'capitalize',
          }}>
          {stock.name}
        </Text>
        <Text
          style={{...baseStyles.title, color: colors.white, marginBottom: 28}}>
          ${stock.priceCurrent}
        </Text>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={{...baseStyles.body, color: colors.white}}>Open</Text>
            <Text style={{...baseStyles.title2, color: colors.white}}>
              {stock.priceOpening}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{...baseStyles.body, color: colors.white}}>High</Text>
            <Text style={{...baseStyles.title2, color: colors.white}}>
              {stock.priceHeight}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={{...baseStyles.body, color: colors.white}}>Low</Text>
            <Text style={{...baseStyles.title2, color: colors.white}}>
              {stock.priceLow}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: colors.black,
          borderTopColor: colors.gray,
          borderTopWidth: 1,
          paddingTop: 20,
        }}
        onLayout={(event) => {
          const {height} = event.nativeEvent.layout;
          console.log('Measure HEIGHT', height);
          setViewHeight(height);
        }}>
        <HistoryChart history={history} height={viewHeight} />
      </View>
    </ScreenFrame>
  );
}
