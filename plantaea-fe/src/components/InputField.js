import React, { useState } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

export default function InputField({ value, label, icon, inputType, keyboardType, onChangeText }) {
    return (
        <View className="flex-row items-center pb-2 mb-1 border-b border-gray-300">
            {icon}
            {inputType == 'password' ?
                (<TextInput value={value} placeholder={label} keyboardType={keyboardType} className="flex-1 py-0 ml-2" onChangeText={onChangeText} secureTextEntry={true} />) :
                (<TextInput value={value} placeholder={label} keyboardType={keyboardType} className="flex-1 py-0 ml-2" onChangeText={onChangeText} />)}
        </View>
    )
}
