// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../constants/Routes';
import Home_Screen from '../screens/HomeScreen';
 
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.HOME_SCREEN} component={Home_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
