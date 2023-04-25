import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from './../screens/HomeScreen';
import MapScreen from './../screens/MapScreen';
import CameraScreen from './../screens/CameraScreen';

const Stack = createStackNavigator();

export default function HomeStack({navigation, route}) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Map"){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else {
        navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
}, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/> 
      <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}