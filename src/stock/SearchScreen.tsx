import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Stock} from '../routes/Stock';
import {RootStackParamList} from '../routes/RouteStackParamList';
import {searchStock} from './service/stockFacade';
import ScreenFrame from '../core/ScreenFrame';
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
          onChangeText={(text) => {
            setSymbol(text);
            setError(false);
          }}
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
          onPress={async () => {
            const result = await searchStock(symbol);
            if (result.error || result.stock == null) {
              setError(true);
            } else {
              setError(false);
              const stock: Stock = result.stock;
              props.navigation.navigate('Detail', {stock});
            }
          }}
        />
      </View>
    </ScreenFrame>
  );
}
