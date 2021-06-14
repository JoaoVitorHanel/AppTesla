import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import HomeCars from './src/pages/HomeCars';


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#b71c1c" style="light" />
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="HomeCars" component={HomeCars}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}