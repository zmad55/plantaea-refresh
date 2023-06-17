import React from 'react';
import { View, TextInput } from 'react-native';

export default function InputField({ value, label, icon, inputType, keyboardType, onChangeText }) {
    return (
        <View className="flex-row items-center p-2 mb-2 bg-gray-300 border-2 border-gray-300 rounded-2xl">
            {icon}
            {inputType == 'password' ?
                (<TextInput value={value} placeholder={label} keyboardType={keyboardType} className="flex-1 py-0 ml-1" onChangeText={onChangeText} secureTextEntry={true} />) :
                (<TextInput value={value} placeholder={label} keyboardType={keyboardType} className="flex-1 py-0 ml-1" onChangeText={onChangeText} />)}
        </View>
    )
}
