import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../../routes/RouteStackParamList';
import ScreenFrame from '../ScreenFrame';
import {getHistoricalData, HistoryData} from '../../service/stockFacade';
import HistoryChart from './HistoryChart';
import {style} from './DetailScreen.style';

interface Props {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

export default function DetailScreen(props: Props) {
  const [history, setHistory] = useState<Array<HistoryData>>([]);
  const [viewHeight, setViewHeight] = useState<number>(0);

  const {stock} = props.route.params;

  async function loadHistory() {
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
      <View style={style.quote}>
        <Text style={style.symbol}>{stock.symbol}</Text>
        <Text style={style.name}>{stock.name}</Text>
        <Text style={style.currentPrice}>${stock.priceCurrent}</Text>

        <View style={style.table}>
          <View style={style.cell}>
            <Text style={style.label}>Open</Text>
            <Text style={style.value}>{stock.priceOpening}</Text>
          </View>
          <View style={style.cell}>
            <Text style={style.label}>High</Text>
            <Text style={style.value}>{stock.priceHeight}</Text>
          </View>
          <View style={style.cell}>
            <Text style={style.label}>Low</Text>
            <Text style={style.value}>{stock.priceLow}</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={style.history}
        onLayout={(event) => {
          const {height} = event.nativeEvent.layout;
          setViewHeight(height);
        }}>
        <HistoryChart history={history} height={viewHeight} />
      </ScrollView>
    </ScreenFrame>
  );
}
