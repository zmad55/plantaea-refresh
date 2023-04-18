import React, { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './../screens/HomeScreen'

//import AuthStack from './AuthStack';
//import AppStack from './AppStack';
//import { AuthContext } from '../context/AuthContext';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    const { isLoading, userToken } = useContext(AuthContext);
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
        </Drawer.Navigator>


        // return (
        //     <NavigationContainer>
        //         {userToken !== null ? <AppStack /> : <AuthStack />}
        //     </NavigationContainer>
        // );
    );
};

export default AppNavigation;
