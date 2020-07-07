import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../routes/RouteStackParamList';
import {style} from './SplashScreen.style';
import {getSymbols} from '../../service/stockFacade';
import {SymbolDTO} from '../../service/finnhub/FinnHubApi';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
}

export default function SplashScreen(props: Props) {
  useEffect(() => {
    load();
  });

  async function load() {
    const symbols: Array<SymbolDTO> = await getSymbols();
    props.navigation.navigate('Search', {symbols});
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
