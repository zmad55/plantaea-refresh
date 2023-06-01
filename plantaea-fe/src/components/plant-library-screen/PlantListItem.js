import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ListPlant({ image, scientificName, localName, category, onPress }) {
    return (
        <View>
            <View className="flex-row items-center flex-1">
                <TouchableOpacity onPress={onPress} className="flex-row items-center flex-1 bg-white rounded-2xl shadow-md p-3 m-1">
                    <Image source={image} className="w-14 h-14 rounded-full mr-4" />
                    <View>
                        <Text className="font-josesans text-black">{localName}</Text>
                        <Text className="font-josesans italic text-emerald-500 text-xs">{scientificName}</Text>
                        <View className="flex-row">
                            {/* {category[0] == 'medicine' && category[1] == 'consumable' && category[2] == 'ornamental' ?
                                createPlantTag(true, true, true)
                                : category[0] == 'medicine' && category[1] == 'consumable' ?
                                    createPlantTag(true, true)
                                    : category[0] == 'medicine' && category[1] == 'ornamental' ?
                                        createPlantTag(true, false, true)
                                        : category[0] == 'consumable' && category[1] == 'ornamental' ?
                                            createPlantTag(false, true, true)
                                            : category[0] == 'medicine' ?
                                                createPlantTag(true)
                                                : category[0] == 'consumable' ?
                                                    createPlantTag(false, true)
                                                    :
                                                    createPlantTag(false, false, true)
                            } */}
                            {(() => {
                                switch (true) {
                                    case category[0] === 'medicine' && category[1] === 'consumable' && category[2] === 'ornamental':
                                        return createPlantTag(true, true, true);
                                    case category[0] === 'medicine' && category[1] === 'consumable':
                                        return createPlantTag(true, true);
                                    case category[0] === 'medicine' && category[1] === 'ornamental':
                                        return createPlantTag(true, false, true);
                                    case category[0] === 'consumable' && category[1] === 'ornamental':
                                        return createPlantTag(false, true, true);
                                    case category[0] === 'medicine':
                                        return createPlantTag(true);
                                    case category[0] === 'consumable':
                                        return createPlantTag(false, true);
                                    default:
                                        return createPlantTag(false, false, true);
                                }
                            })()}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function createPlantTag(isMedicine, isConsumable, isAromatic) {
    return (
        <View className="flex-row">
            {/* {isMedicine == true ?
                <View className="bg-red-400 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text className="text-xs color-white">Medicine</Text>
                </View>
                :
                null
            }
            {isConsumable == true ?
                <View className="bg-yellow-500 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text className="text-xs color-white">Consumable</Text>
                </View>
                :
                null
            }
            {isAromatic == true ?
                <View className="bg-pink-400 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text className="text-xs color-white">Ornamental</Text>
                </View>
                :
                null
            } */}
            {isMedicine && (
                <View className="bg-red-400 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text className="text-xs color-white">Medicine</Text>
                </View>
            )}
            {isConsumable && (
                <View className="bg-yellow-500 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text className="text-xs color-white">Consumable</Text>
                </View>
            )}
            {isAromatic && (
                <View className="bg-pink-400 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text className="text-xs color-white">Ornamental</Text>
                </View>
            )}
        </View>
    )
}