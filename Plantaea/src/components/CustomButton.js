import React from 'react'
import { Text, TouchableOpacity, TextInput } from 'react-native'

export default function CustomButton({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} className="bg-teal-900 p-5 rounded-lg mt-5 mb-5">
            <Text className="text-center font-bold text-white text-lg">{label}</Text>
        </TouchableOpacity>
    )
}