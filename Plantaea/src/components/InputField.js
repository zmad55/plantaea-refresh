import React from 'react'
import { View, TextInput } from 'react-native'

export default function InputField({ value, label, icon, inputType, keyboardType, onChangeText }) {
    return (
        <View className="flex-row items-center border-b border-gray-300 pb-4 mb-1">
            {icon}
            {inputType == 'password' ?
                (<TextInput value={value} placeholder={label} keyboardType={keyboardType} className="flex-1 py-0" onChangeText={onChangeText} secureTextEntry={true} />) :
                (<TextInput value={value} placeholder={label} keyboardType={keyboardType} className="flex-1 py-0" onChangeText={onChangeText} />)}
        </View>
    )
}