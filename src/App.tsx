import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import SplashScreen from "./splash/SplashScreen";
import CounterView from "./counter/CounterView";
import {RootStackParamList} from "./RouteStackParamList";
import ResultScreen from "./counter/ResultScreen";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Splash"} headerMode={"screen"}>
        <Stack.Screen name={"Splash"} component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name={"Counter"} component={CounterView} options={{headerShown: false}}/>
        <Stack.Screen name={"Results"} component={ResultScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
