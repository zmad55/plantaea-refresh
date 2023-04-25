import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} />
      {/* <Stack.Screen name="Plant Details" component={PlantDetailsScreen} options={{ headerShown: false }}/> */}
    </Stack.Navigator>
  );
}
