import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import UserProfileScreen from '../screens/UserProfileScreen';

const Stack = createStackNavigator();

export default function UserProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User Profile" component={UserProfileScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}