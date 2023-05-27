import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function PlantListItem({ image, scientificName, localName, category, onPress }) {
    return (
        <View>
            <View className="flex-row items-center flex-1">
                <TouchableOpacity onPress={onPress} className="flex-row items-center flex-1 bg-white rounded-2xl shadow-md p-3 m-1">
                    <Image source={image} className="w-14 h-14 rounded-full mr-4" />
                    <View>
                        <Text className="font-josesans text-black">{localName}</Text>
                        <Text className="font-josesans italic text-emerald-500 text-xs">{scientificName}</Text>
                        <View className="flex-row">
                            {category[0] == 'medicine' && category[1] == 'consumable' && category[2] == 'ornamental' ?
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
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function createPlantTag(isMedicine, isConsumable, isAromatic) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {isMedicine == true ?
                <View className="bg-red-400 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text style={{ fontSize: 8, color: 'white' }}>Medicine</Text>
                </View>
                :
                null
            }
            {isConsumable == true ?
                // <View style={{ backgroundColor: '#F6C36C', alignItems: 'center', borderRadius: 8, paddingHorizontal: 5, paddingVertical: 1, marginTop: 2, marginRight: 2.5 }}>
                <View className="bg-yellow-500 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text style={{ fontSize: 8, color: 'white' }}>Consumable</Text>
                </View>
                :
                null
            }
            {isAromatic == true ?
                // <View style={{ backgroundColor: '#E281DA', alignItems: 'center', borderRadius: 8, paddingHorizontal: 5, paddingVertical: 1, marginTop: 2, marginRight: 2.5 }}>
                <View className="bg-pink-400 items-center rounded-md px-1 py-0.5 mt-1 mr-1">
                    <Text style={{ fontSize: 8, color: 'white' }}>Ornamental</Text>
                </View>
                :
                null
            }
        </View>
    )
}