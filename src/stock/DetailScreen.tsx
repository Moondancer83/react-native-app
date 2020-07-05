import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../routes/RouteStackParamList';
import ScreenFrame from '../core/ScreenFrame';
import {getHistoricalData, HistoryData} from './service/stockFacade';
import HistoryChart from './HistoryChart';

interface Props {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

export default function DetailScreen(props: Props) {
  const [history, setHistory] = useState<Array<HistoryData>>([]);
  const {stock} = props.route.params;

  async function loadHistory() {
    console.log('DetailScreen.load');
    const data: {
      error: boolean;
      history: Array<HistoryData>;
    } = await getHistoricalData(stock.symbol);
    console.log('DetailScreen.load', data);
    setHistory(data.history);
  }

  useEffect(() => {
    loadHistory();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ScreenFrame barStyle={'light-content'} />
      <View style={{backgroundColor: 'black'}}>
        <Text style={{color: 'white'}}>{stock.symbol}</Text>
        <Text style={{color: 'white'}}>{stock.name}</Text>
        <Text style={{color: 'white'}}>${stock.priceCurrent}</Text>

        <Text style={{color: 'white'}}>Open {stock.priceOpening}</Text>
        <Text style={{color: 'white'}}>High {stock.priceHeight}</Text>
        <Text style={{color: 'white'}}>Low {stock.priceLow}</Text>

        <View
          style={{
            borderTopColor: 'white',
            borderTopWidth: StyleSheet.hairlineWidth,
            marginTop: 20,
            paddingTop: 20,
          }}>
          <HistoryChart history={history} />
        </View>
      </View>
    </>
  );
}
