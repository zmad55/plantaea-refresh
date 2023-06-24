import { Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function FeaturedPlantCardFront({ text }) {
    return (
        <View className="items-center justify-center py-2 bg-gray-300 rounded-2xl h-44">
            <Image source={require('../../assets/images_/trivia-bg.png')} className="h-32 w-72" resizeMode="contain" />
            <View className="flex-row items-center justify-end mb-2">
                <Text className="text-xl text-emerald-800 font-josesans-reg">{text + " "}</Text>
                <Ionicons className="text-emerald-800" name="chevron-forward-circle-sharp" size={24} />
            </View>
        </View>
    )

}