import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function PlantLibraryTabs({
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

    const options = [
        { label: option1, color: "green", value: 1 },
        { label: option2, color: "red", value: 2 },
        { label: option3, color: "yellow", value: 3 },
        { label: option4, color: "pink", value: 4 }
    ];

    return (
        <View className="h-14 w-full bg-white flex-row justify-center">
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    onPress={() => updateSwitchData(option.value)}
                    className={`${getSelectionMode === option.value ? "mt-0" : "mt-4"} 
                                flex-1 rounded-tl-2xl rounded-tr-2xl justify-center items-center
                                ${getSelectionMode === option.value ? 'bg-' + option.color + '-600' : 'bg-' + option.color + '-600' + ' opacity-50'}`}
                >
                    <Text
                        className={`${getSelectionMode === option.value ? "text-white text-sm font-josesans-reg" : "text-gray-600 text-xs font-josesans-reg"}`}
                    >
                        {option.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

