import React, { useEffect, useState } from "react";
import { Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useDispatch, useSelector } from "react-redux";
import { loadUser, getToken } from './redux/action'

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Footer from './src/components/Footer';

const Stack = createNativeStackNavigator();

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    const { isAuthenticated, loading } = useSelector(state => state.auth)

    return (
        //loading ? <Text>Loading...</Text> :
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "LoginScreen"}>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
                {isAuthenticated && <Footer />}
            </NavigationContainer>
    )
}



export default Main;



