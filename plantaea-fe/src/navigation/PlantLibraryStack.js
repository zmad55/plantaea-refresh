import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import PlantLibraryScreen from '../screens/PlantLibraryScreen';
import PlantDetailsScreen from '../screens/PlantDetailsScreen';

const Stack = createStackNavigator();

export default function PlantLibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Plant Library" component={PlantLibraryScreen} options={{
        headerShown: true,
        title: '',
        headerBackImage: () => (
          <Ionicons
            name="caret-back-circle-sharp"
            size={40}
            color='#1C4C4E'
          />
        ),
        headerTransparent: true,
      }} />
      <Stack.Screen name="Plant Details" component={PlantDetailsScreen} options={{
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
    </Stack.Navigator>
  );
}
