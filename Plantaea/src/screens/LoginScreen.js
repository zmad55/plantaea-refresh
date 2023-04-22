import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { useDispatch, useSelector } from "react-redux";

import { userLogin } from './../../redux/actions/authActions';
import { storeData, getData } from "./../../redux/asyncStorage"

export default function LoginScreen() {
    const { error, userInfo } = useSelector((state) => state.auth)

    const dispatch = useDispatch();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigation = useNavigation();

    const loginHandler = () => {
        dispatch(userLogin({ username: username, password: password }))
    };

    useEffect(() => {
        if (error) {
            alert(error)
            dispatch({ type: "clearError" })
        }
    }, [error, dispatch, alert])

    return (
        <SafeAreaView className="flex-1 justify-center">
            <View className="px-8">
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../assets/images/plant-library-icon.png')}
                        resizeMode="contain"
                        style={{ width: 80, height: 80 }}
                    />
                    <Text className="text-3xl font-bold text-green-800 mb-10">Login</Text>
                </View>
                <InputField
                    value={username}
                    label={'Email ID'}
                    icon={<MaterialIcons
                        name='alternate-email'
                        size={20} color="#989898"
                        className="mr-3" />} keyboardType="email-address" onChangeText={setUsername} />
                <InputField
                    value={password}
                    label={'Password'}
                    icon={<Ionicons
                        name='ios-lock-closed-outline'
                        size={20}
                        color="#989898"
                        className="mr-3" />} inputType="password" onChangeText={setPassword} />
                <TouchableOpacity className="bg-teal-900 p-5 rounded-lg mt-5 mb-5">
                    <Text className="text-center font-bold text-white text-lg" onPress={loginHandler} disabled={!username || !password}>Login</Text>
                </TouchableOpacity>
                {/* <Button disabled={!username || !password} className="bg-teal-900 p-5 rounded-lg mt-5 mb-5" onPress={loginHandler}>
                    <Text className="text-center font-bold text-white text-lg">Login</Text>
                </Button> */}
                <View className="flex-row justify-center mb-2">
                    <Text>First time using the Plantaea?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text className="text-green-900 font-bold"> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}