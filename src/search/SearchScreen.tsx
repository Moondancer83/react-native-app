import React, {useState} from 'react';
import {Text, TextInput, TouchableNativeFeedback, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Stock} from '../routes/Stock';
import {RootStackParamList} from '../routes/RouteStackParamList';
import {searchStock} from '../stock/service/stockFacade';
import ScreenFrame from '../screen/ScreenFrame';
import {style} from './SearchScreen.style';
import {baseStyles} from '../screen/BaseStyles';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Search'>;
}

export default function SearchScreen(props: Props) {
  const [symbol, setSymbol] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [inputStyle, setInputStyle] = useState(style.input);
  const [errorStyle, setErrorStyle] = useState(style.error);
  const [buttonStyle, setButtonStyle] = useState(style.buttonDisabled);

  return (
    <ScreenFrame>
      <View style={errorStyle}>
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
            setErrorStyle(style.error);
            setError(false);
            setInputStyle(style.inputFocused);
            if (text) {
              setButtonStyle(style.button);
            } else {
              setButtonStyle(style.buttonDisabled);
            }
          }}
          onFocus={() => setInputStyle(style.inputFocused)}
          style={inputStyle}
        />
      </View>
      <View style={buttonStyle}>
        <TouchableNativeFeedback disabled={!symbol}>
          <Text
            style={style.buttonText}
            onPress={async () => {
              const result = await searchStock(symbol);
              if (result.error || result.stock == null) {
                setError(true);
                setErrorStyle(style.errorShow);
                setInputStyle(style.inputError);
              } else {
                setError(false);
                setInputStyle(style.inputFocused);
                const stock: Stock = result.stock;
                props.navigation.navigate('Detail', {stock});
              }
            }}>
            GO
          </Text>
        </TouchableNativeFeedback>
      </View>
    </ScreenFrame>
  );
}
