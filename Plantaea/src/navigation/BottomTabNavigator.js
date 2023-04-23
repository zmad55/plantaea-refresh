import React from 'react';
import { View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import MapScreen from '../screens/MapScreen';
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
      <Tab.Screen name="Map_Stack" component={MapScreen} />
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

// function CameraTabBarButton({ onPress, accessibilityLabel }) {
//   return (
//     // <TouchableOpacity
//     //   onPress={onPress}
//     //   accessibilityRole="button"
//     //   accessibilityLabel={accessibilityLabel}
//     //   className="flex-1 items-center justify-center"
//     // >
//     //   <View className='items-center justify-center bg-green-600 rounded-full w-20 h-20' >
//     //     <Ionicons name="camera-outline" size={30} color="white" />
//     //   </View>
//     // </TouchableOpacity>

//     <TouchableHighlight
//       className="items-center justify-center bg-green-600 rounded-full w-20 h-20 bottom-5"
//       underlayColor="darkgreen"
//       onPress={onPress}
//     >
//       <View className='items-center justify-center bg-green-600 rounded-full w-20 h-20' >
//         <Ionicons name="camera-outline" size={30} color={focused ? "green" : "black"} />
//       </View>
//     </TouchableHighlight>
//   );
// }

//className = ;
