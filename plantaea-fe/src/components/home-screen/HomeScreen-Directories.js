import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function DirectoryCard({ iconName, title, iconColor, description, onPressAction }) {
    return (
        <TouchableOpacity onPress={onPressAction}>
            <View className="relative items-center justify-center flex-1 p-1 bg-white shadow-lg shadow-emerald-700 w-36 h-44 rounded-xl opacity-90">
                {/* <Image
                    source={imageSource}
                    resizeMode="contain"
                    className="self-center w-48 h-24 m-1"
                /> */}

                <Ionicons
                    name={iconName}
                    size={60}
                    className="pt-1 ml-2 text-emerald-500" />
                <View className="mt-2">
                    <Text className="text-xl font-semibold text-center text-emerald-800 font-josesans-reg">{title}</Text>
                    <Text className="text-sm text-center text-emerald-700 font-josesans">{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

