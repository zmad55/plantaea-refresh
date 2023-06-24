import { Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function FeaturedPlantCardBack({ title, text }) {
    return (
        <View className="items-center justify-center py-2 h-44 rounded-2xl bg-slate-600">
            <Text className="text-xl text-emerald-200 font-josesans-reg">{title}</Text>
            <View className="p-2 m-4 border-2 border-emerald-200 rounded-2xl bg-slate-500">
                <Text className="text-lg text-slate-50">{text}</Text>
            </View>
        </View>
    )
}
