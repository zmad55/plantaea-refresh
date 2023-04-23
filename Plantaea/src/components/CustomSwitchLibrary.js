import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function CustomSwitchLibrary({
    selectionMode,
    option1,
    option2,
    option3,
    option4,
    onSelectSwitch
}) {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View className="h-14 w-full bg-white flex-row justify-center">
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                className={`${getSelectionMode === 1 ? "mt-0" : "mt-4"} 
                flex-1 rounded-tl-2xl rounded-tr-2xl justify-center items-center 
                ${getSelectionMode === 1 ? "bg-green-500" : "bg-green-200"}`}
            >
                <Text
                    className={`${getSelectionMode === 1 ? "text-white" : "text-white"} 
                    ${getSelectionMode === 1 ? "text-sm" : "text-xs"}`}
                >
                    {option1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                className={`${getSelectionMode === 2 ? "mt-0" : "mt-4"} 
                flex-1 rounded-tl-2xl rounded-tr-2xl justify-center items-center 
                ${getSelectionMode === 2 ? "bg-red-500" : "bg-red-200"}`}
            >
                <Text
                    className={`${getSelectionMode === 2 ? "text-white" : "text-white"} 
                    ${getSelectionMode === 2 ? "text-sm" : "text-xs"}`}
                >
                    {option2}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(3)}
                className={`${getSelectionMode === 3 ? "mt-0" : "mt-4"} 
                flex-1 rounded-tl-2xl rounded-tr-2xl justify-center items-center 
                ${getSelectionMode === 3 ? "bg-yellow-500" : "bg-yellow-200"}`}
            >
                <Text
                    className={`${getSelectionMode === 3 ? "text-white" : "text-white"} 
                    ${getSelectionMode === 3 ? "text-sm" : "text-xs"}`}
                >
                    {option3}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(4)}
                className={`${getSelectionMode === 4 ? "mt-0" : "mt-4"} 
                flex-1 rounded-tl-2xl rounded-tr-2xl justify-center items-center 
                ${getSelectionMode === 4 ? "bg-purple-500" : "bg-purple-200"}`}
            >
                <Text
                    className={`${getSelectionMode === 4 ? "text-white" : "text-white"} 
                    ${getSelectionMode === 4 ? "text-sm" : "text-xs"}`}
                >
                    {option4}
                </Text>
            </TouchableOpacity>
        </View>
    )
}