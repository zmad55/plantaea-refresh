import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'
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
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../assets/images/plantaea-logo.png')}
                        resizeMode="contain"
                        style={{ width: 80, height: 80 }}
                    />
                    <Text className="mb-10 text-3xl font-bold text-green-800">Login</Text>
                </View>
                <InputField
                    value={username}
                    label={'Username'}
                    icon={<Ionicons
                        name='person-outline'
                        size={20}
                        className="mr-3" />} keyboardType="email-address" onChangeText={setUsername} />
                <InputField
                    value={password}
                    label={'Password'}
                    icon={<Ionicons
                        name='ios-lock-closed-outline'
                        size={20}
                        className="mr-3" />} inputType="password" onChangeText={setPassword} />
                {/* <div className="container p-4 mx-auto">
                    <InputField placeholder="Email" />
                    <InputField placeholder="Password" />
                </div> */}
                <TouchableOpacity className="p-5 mt-5 mb-5 bg-teal-800 rounded-lg">
                    <Text className="text-lg font-bold text-center text-white" onPress={loginHandler} disabled={!username || !password}>Login</Text>
                </TouchableOpacity>
                <View className="flex-row justify-center mb-2">
                    <Text>First time using the Plantaea?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text className="font-bold text-green-900"> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}