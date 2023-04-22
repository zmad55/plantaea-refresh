import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CustomCameraButton({ onPress, focused }) {
    return (
        <TouchableHighlight
            className="items-center justify-center bg-green-600 rounded-full w-20 h-20 bottom-5"
            underlayColor="darkgreen"
            onPress={onPress}
        >
            <View className='items-center justify-center bg-green-600 rounded-full w-20 h-20' >
                <MaterialCommunityIcons name="camera-iris" size={60} color={focused ? "grey" : "white"} />
            </View>
        </TouchableHighlight>
    );
}