import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField'
import Button from '../components/Button'
import HyperLink from '../components/HyperLink';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from '../../redux/actions';
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
        <SafeAreaView className="justify-center flex-1">
            <View className="px-8">
                <View className="items-center">
                    <Image
                        source={require('../assets/icons/logo.png')}
                        resizeMode="contain"
                        style={{ width: 180, height: 100 }}
                    />
                    <Text className="text-3xl font-bold text-green-800">Welcome Back</Text>
                    <Text>Login to your account</Text>
                </View>
                <View className="mt-10">
                    <InputField
                        value={username}
                        label={'Username'}
                        icon={<Ionicons
                            name='person-outline'
                            size={18}
                            className="ml-1 mr-3 text-gray-600" />} keyboardType="email-address" onChangeText={setUsername} />
                    <InputField
                        value={password}
                        label={'Password'}
                        icon={<Ionicons
                            name='ios-lock-closed-outline'
                            size={18}
                            className="ml-1 mr-3 text-gray-600" />} inputType="password" onChangeText={setPassword} />
                </View>
                <View className="flex flex-row justify-end">
                    <HyperLink
                        onPress={() => ""}
                        hyperLink={"Forgot Password?"} />
                </View>
                <View className="mt-10">
                    <Button
                        label="Login"
                        onPress={loginHandler} />
                    <HyperLink
                        optionalText={"Don't have an account? "}
                        onPress={() => navigation.navigate('Register')}
                        hyperLink={"Signup"} />
                </View>
            </View>
        </SafeAreaView>
    )
}