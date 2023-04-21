import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'

import HomeScreen from '../screens/HomeScreen';
// import DailiesScreen from '../screens/DailiesScreen';
// import CameraScreen from '../screens/CameraScreen';
// import PlantLibraryStack from './PlantLibraryStack';
// import UserProfileScreen from '../screens/UserProfileScreen';
import CameraBottomTabButton from './CustomCameraButton';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const footer = () => {
    const navigation = useNavigation()
    return (
        <View className="p-5 bg-green-400 flex-row justify-around">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Ionicons name="home-outline" color={"#900"} size={30} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Ionicons name="home-outline" color={"#900"} size={30} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Ionicons name="home-outline" color={"#900"} size={30} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Ionicons name="home-outline" color={"#900"} size={30} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Ionicons name="home-outline" color={"#900"} size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default footer