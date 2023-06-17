import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function CustomButton({ label, onPress }) {
    return (
        <TouchableOpacity className="p-3 mt-3 mb-2 bg-teal-900 rounded-2xl" onPress={onPress}>
            <Text className="text-lg font-bold text-center text-white">{label}</Text>
        </TouchableOpacity>
    )
}