import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Stock} from '../../service/Stock';
import {RootStackParamList} from '../../routes/RouteStackParamList';
import {getSymbol, searchStock} from '../../service/stockFacade';
import ScreenFrame from '../ScreenFrame';
import {style} from './SearchScreen.style';
import {baseStyles, colors} from '../BaseStyles';
import {RouteProp} from '@react-navigation/native';
import {SymbolDTO} from '../../service/finnhub/FinnHubApi';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Search'>;
  route: RouteProp<RootStackParamList, 'Search'>;
}

export default function SearchScreen(props: Props) {
  const [symbol, setSymbol] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  function getProfile(): SymbolDTO | undefined {
    const {symbols} = props.route.params;
    const profile = getSymbol(symbols, symbol);
    if (!profile) {
      setError(true);
    }
    return profile;
  }

  async function search(profile: SymbolDTO) {
    const result = await searchStock(profile);
    if (result.error || result.stock == null) {
      setError(true);
    } else {
      setError(false);
      const stock: Stock = result.stock;
      props.navigation.navigate('Detail', {stock});
    }
  }

  async function submit() {
    const profile = getProfile();
    if (!profile) {
      return;
    }
    search(profile);
  }

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
          autoCapitalize={'characters'}
          editable={true}
          onChangeText={(text) => {
            setSymbol(text);
            setError(false);
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={
            error ? style.inputError : focus ? style.inputFocused : style.input
          }
          placeholder={'VOO'}
          placeholderTextColor={colors.lightGray}
          onSubmitEditing={submit}
        />
      </View>
      <View>
        <TouchableOpacity
          disabled={!symbol}
          onPress={submit}
          style={symbol ? style.button : style.buttonDisabled}>
          <Text style={style.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    </ScreenFrame>
  );
}
