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

    // const options = []

    // Initialize properties
    // const optionProperties = [
    //     { label: option1, color: "green-800", value: 1 },
    //     { label: option2, color: "red-400", value: 2 },
    //     { label: option3, color: "yellow-500", value: 3 },
    //     { label: option4, color: "pink-400", value: 4 }
    // ];

    return (
        <View className="flex-row justify-center w-full bg-white h-14">
            {/* {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    onPress={() => updateSwitchData(option.value)}
                    className={`${getSelectionMode === option.value ? "bg-" + option.color : 'bg-' + option.color + ' opacity-50'}
                                ${getSelectionMode === option.value ? "mt-0" : "mt-4"} 
                                flex-1 rounded-tl-2xl rounded-tr-2xl justify-center items-center
                                `}>
                    <Text className={`${getSelectionMode === option.value ?
                        "text-white text-sm font-josesans-reg" :
                        "text-gray-600 text-xs font-josesans-reg"}`}>
                        {option.label}
                    </Text>
                </TouchableOpacity>
            ))} */}
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

