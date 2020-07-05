import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './routes/RouteStackParamList';
import SplashScreen from './splash/SplashScreen';
import SearchScreen from './stock/SearchScreen';
import DetailScreen from './stock/DetailScreen';
import BackImage from './stock/BackImage';

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
            },
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
