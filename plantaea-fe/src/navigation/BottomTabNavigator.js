import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import DailiesScreen from '../screens/DailiesScreen';
import CameraScreen from '../screens/CameraScreen';
import PlantLibraryStack from './PlantLibraryStack';
import UserProfileStack from './UserProfileStack';

import CameraTabBarButton from './../components/CustomCameraButton';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === 'Home_Stack') {
            iconName = 'home';
          } else if (route.name === 'Map_Stack') {
            iconName = 'game-controller';
          } else if (route.name === 'Plant Library_Stack') {
            iconName = 'library';
          } else if (route.name === 'User Profile_Stack') {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={25} color={focused ? "green" : "grey"} />;
        },
      })}
    >
      <Tab.Screen name="Home_Stack" component={HomeStack} />
      <Tab.Screen name="Map_Stack" component={DailiesScreen} options={{ tabBarStyle: "none" }}/>
      <Tab.Screen name="Camera_Stack"
        component={CameraScreen}
        options={{
          tabBarButton: (props) => (
            <CameraTabBarButton
              {...props}
              focused={props.accessibilityState?.focused}
            />
          )
        }} />
      <Tab.Screen name="Plant Library_Stack" component={PlantLibraryStack} />
      <Tab.Screen name="User Profile_Stack" component={UserProfileStack} />
    </Tab.Navigator>
  );
}
