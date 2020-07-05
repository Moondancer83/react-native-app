import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Stock} from '../routes/Stock';
import {RootStackParamList} from '../routes/RouteStackParamList';
import ScreenFrame from './ScreenFrame';
import {style} from './Screen.style';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Search'>;
}

export default function SearchScreen(props: Props) {
  const [symbol, setSymbol] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  return (
    <ScreenFrame>
      <View style={style.view}>
        {error ? (
          <Text style={{backgroundColor: 'red', color: 'white'}}>
            This is not a valid Ticker Symbol
          </Text>
        ) : null}
        <Text>Enter Ticker Symbol</Text>
        <TextInput
          editable={true}
          onChangeText={(text) => setSymbol(text)}
          style={{
            width: '80%',
            height: 40,
            borderColor: error ? 'red' : 'gray',
            borderWidth: 1,
            textAlign: 'center',
          }}
        />
        <Button
          title={'GO'}
          onPress={() => {
            if (
              !symbol ||
              (symbol && (symbol.length < 3 || symbol.length > 4))
            ) {
              setError(true);
            } else {
              setError(false);
              const stock: Stock = {
                symbol: symbol || '',
                name: 'Apple Inc',
                priceCurrent: 276.1,
                priceOpening: 273.6,
                priceHeight: 273.6,
                priceLow: 273.6,
                history: {
                  '2020.05.04.': 265.4,
                },
              };
              props.navigation.navigate('Detail', {stock});
            }
          }}
        />
      </View>
    </ScreenFrame>
  );
}
