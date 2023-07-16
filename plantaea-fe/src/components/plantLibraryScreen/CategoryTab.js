import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function InitiateCategoryTabs({ selectionMode, optionsData, onSelectSwitch }) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

    const [options, setOptions] = useState([]);
    useEffect(() => {
        const preparedOptions = optionsData.map((option, index) => ({
            ...option,
        }));
        setOptions(preparedOptions);
    }, [optionsData])

    return (
        <View className="flex-row justify-center w-full bg-white h-14">
            {options.map((option) => (
                <TouchableOpacity
                    key={option.label}
                    activeOpacity={1}
                    onPress={() => updateSwitchData(option.label)}
                    className={`${getSelectionMode === option.label ? "bg-" + option.color : 'bg-' + option.color + ' opacity-50'}
                                ${getSelectionMode === option.label ? "mt-0" : "mt-4"} 
                                flex-1 rounded-tl-2xl rounded-tr-2xl justify-center items-center
                                `}>
                    <Text className={`${getSelectionMode === option.label ?
                        "text-white text-sm font-josesans-reg" :
                        "text-gray-600 text-xs font-josesans-reg"}`}>
                        {option.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

