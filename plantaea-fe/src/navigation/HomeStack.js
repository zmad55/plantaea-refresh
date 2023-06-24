import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './../screens/HomeScreen';
import MapStack from './MapStack';
import CameraStack from './CameraStack';
import LibraryStack from './PlantLibraryStack';


const Stack = createStackNavigator();

export default function HomeStack({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CameraStack" component={CameraStack} options={{
        headerShown: true,
        title: '',
        headerBackImage: () => (
          <Ionicons
            name="caret-back-circle-sharp"
            size={40}
            color='white'
          />
        ),
        headerTransparent: true,
      }} />
      <Stack.Screen name="MapStack" component={MapStack}
        options={{
          headerShown: true,
          title: '',
          headerBackImage: () => (
            <Ionicons
              name="caret-back-circle-sharp"
              size={40}
              color='white'
            />
          ),
          headerTransparent: true,
        }} />
      <Stack.Screen name="LibraryStack" component={LibraryStack}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
  );
}

