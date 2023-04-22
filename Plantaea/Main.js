import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import AuthStack from "./src/navigation/AuthStack";

import { useSelector } from "react-redux";

export default function Main() {

    const { isAuthenticated } = useSelector((state) => state.auth)

    return (
        <NavigationContainer>
            {isAuthenticated ? <BottomTabNavigator /> : <AuthStack />}
        </NavigationContainer>
    )
}


