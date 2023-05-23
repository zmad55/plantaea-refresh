import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import AuthStack from "./src/navigation/AuthStack";
import { useSelector } from "react-redux";

import useCustomFont from './src/constants/fonts'


export default function Main() {

    const fontIsReady = useCustomFont()

    if (!fontIsReady) {
        console.log("Loading font")
    }

    const { isAuthenticated } = useSelector((state) => state.auth)

    return (
        <NavigationContainer>
            {isAuthenticated ? <BottomTabNavigator /> : <AuthStack />}
        </NavigationContainer>
    )
}


