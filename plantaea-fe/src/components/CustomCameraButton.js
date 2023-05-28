import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CustomCameraButton({ onPress, focused }) {
    return (
        <TouchableHighlight
            className="items-center justify-center bg-green-800 rounded-full w-15 h-15 bottom-7"
            underlayColor="darkgreen"
            onPress={onPress}
        >
            <View className='items-center justify-center bg-green-800 rounded-full w-16 h-16' >
                <MaterialCommunityIcons name="camera-iris" size={50} color={focused ? "grey" : "white"} />
            </View>
        </TouchableHighlight>
    );
}