import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';

import AuthStack from '@navigation/AuthStack';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import useCustomFont from '@constants/fonts';


export default function Main() {

    const fontIsReady = useCustomFont();
    if (!fontIsReady) {
        console.log('Loading font');
    }

    const { userInfo } = useSelector((state) => state.auth);

    return (
        <NavigationContainer>
            {userInfo ? <BottomTabNavigator /> : <AuthStack />}
        </NavigationContainer>
    );
};


