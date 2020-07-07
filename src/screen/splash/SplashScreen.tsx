import React, {useCallback, useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNetInfo} from '@react-native-community/netinfo';

import {RootStackParamList} from '../../routes/RouteStackParamList';
import {getSymbols} from '../../service/stockFacade';
import {SymbolDTO} from '../../service/finnhub/FinnHubApi';
import NoInternetScreen from '../no-internet/NoInternetScreen';
import {style} from './SplashScreen.style';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
}

export default function SplashScreen(props: Props) {
  const netInfo = useNetInfo();
  const [fallback, setFallback] = useState(false);

  const load = useCallback(async () => {
    const symbols: Array<SymbolDTO> = await getSymbols();
    props.navigation.navigate('Search', {symbols});
  }, [props.navigation]);

  useEffect(() => {
    if (netInfo.isInternetReachable) {
      load();
      setFallback(false);
    } else {
      setTimeout(() => setFallback(true), 1000);
    }
  }, [netInfo, fallback, load]);

  if (fallback && !netInfo.isInternetReachable) {
    return <NoInternetScreen />;
  }
  return (
    <View style={style.view}>
      <Image
        style={style.image}
        source={{
          uri:
            'https://avatars0.githubusercontent.com/u/17519026?s=400&u=7bccc5b9436aaccfe4374fd56ca221f3f1558674&v=4',
        }}
      />
    </View>
  );
}
