import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import createPlantTag from "./createPlantTag";

export default function ListItem({ image, scientificName, localName, category, onPress }) {
    return (
        <View>
            <View className="flex-row items-center flex-1">
                <TouchableOpacity onPress={onPress} className="flex-row items-center flex-1 bg-white rounded-2xl shadow-md p-3 m-1">
                    <Image source={image} style={{ width: 55, height: 55, borderRadius: 55 / 2, marginRight: 8 }} />
                    <View>
                        <Text className="font-josesans-italic text-red-500">{localName}</Text>
                        <Text className="font-josesans italic text-emerald-200 text-xs">{scientificName}</Text>
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