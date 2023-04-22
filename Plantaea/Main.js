import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Footer from './src/components/Footer';
import { useDispatch, useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function Main() {

    const { isAuthenticated } = useSelector((state) => state.auth)

    return (
        isAuthenticated ?
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Home2" component={HomeScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
                <Footer />
            </NavigationContainer>
            :
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Login"}>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login2" component={LoginScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}


