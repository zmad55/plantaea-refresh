import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function DirectoryCard({ imageSource, title, description, onPressAction }) {
    return (
        <TouchableOpacity onPress={onPressAction}>
            <View className="p-1 bg-white w-36 h-44 rounded-xl opacity-90">
                <Image
                    source={imageSource}
                    resizeMode="contain"
                    className="self-center w-48 h-24 m-1"
                />
                <Text className="text-2xl font-light text-center text-emerald-800 font-josesans">{title}</Text>
                <Text className="text-sm text-center text-gray-500 font-josesans">{description}</Text>
            </View>
        </TouchableOpacity>
    )
}

