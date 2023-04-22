import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PlantLibraryScreen from '../screens/PlantLibraryScreen';
import PlantDetailsScreen from '../screens/PlantDetailsScreen';

const Stack = createStackNavigator();

export default function PlantLibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Plant Library" component={PlantLibraryScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Plant Details" component={PlantDetailsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
