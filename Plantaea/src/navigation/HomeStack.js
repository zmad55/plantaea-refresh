import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './../screens/HomeScreen';
import MapScreen from './../screens/MapScreen';
import CameraScreen from './../screens/CameraScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}