import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function DirectoryCard({ imageSource, title, description, onPressAction }) {
    return (
        <TouchableOpacity onPress={onPressAction}>
            <View className="w-36 h-44 p-1 rounded-xl bg-white opacity-90">
                <Image
                    source={imageSource}
                    resizeMode="contain"
                    className="w-48 h-24 self-center m-1"
                />
                <Text className="text-center text-2xl text-emerald-800 font-light font-josesans">{title}</Text>
                <Text className="text-center text-gray-500 text-sm font-josesans">{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

