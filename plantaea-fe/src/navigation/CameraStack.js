import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import ImageSelectionScreen from '../screens/ImageSelectionScreen'

const Stack = createStackNavigator();

export default function CameraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImageSelectionScreen" component={ImageSelectionScreen} options={{
        headerShown: false,
        title: '',
        headerTransparent: true,
      }} />
    </Stack.Navigator>
  )
}