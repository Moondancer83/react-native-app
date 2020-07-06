import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Stock} from '../../service/Stock';
import {RootStackParamList} from '../../routes/RouteStackParamList';
import {searchStock} from '../../service/stockFacade';
import ScreenFrame from '../ScreenFrame';
import {style} from './SearchScreen.style';
import {baseStyles} from '../BaseStyles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Search'>;
}

export default function SearchScreen(props: Props) {
  const [symbol, setSymbol] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <ScreenFrame>
      <View style={error ? style.errorShow : style.error}>
        <Text style={style.errorText}>
          {error ? 'This is not a valid Ticker Symbol' : null}
        </Text>
      </View>
      <View style={style.inputSection}>
        <Text style={baseStyles.title2}>Enter Ticker Symbol</Text>
        <TextInput
          editable={true}
          onChangeText={(text) => {
            setSymbol(text);
            setError(false);
          }}
          onFocus={() => setFocus(true)}
          style={
            error ? style.inputError : focus ? style.inputFocused : style.input
          }
        />
      </View>
      <View>
        <TouchableOpacity
          disabled={!symbol}
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
          style={symbol ? style.button : style.buttonDisabled}>
          <Text style={style.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    </ScreenFrame>
  );
}
