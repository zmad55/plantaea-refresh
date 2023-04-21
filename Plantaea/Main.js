import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

import Footer from './src/components/footer';

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="Home" component={ HomeScreen } options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={ LoginScreen } />
            </Stack.Navigator>
            <Footer />
        </NavigationContainer>
    )
}

export default Main;



