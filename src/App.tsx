import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './routes/RouteStackParamList';
import SplashScreen from './screen/splash/SplashScreen';
import SearchScreen from './screen/search/SearchScreen';
import DetailScreen from './screen/detail/DetailScreen';
import BackImage from './screen/BackImage';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'} headerMode={'screen'}>
        <Stack.Screen
          name={'Splash'}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Search'}
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Detail'}
          component={DetailScreen}
          options={{
            headerBackTitleVisible: false,
            headerBackImage: BackImage,
            headerStyle: {
              backgroundColor: 'black',
              shadowColor: 'transparent',
            },
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
