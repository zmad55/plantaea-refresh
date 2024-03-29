import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import baseQuery from "@redux/slices/apiSlice";
import { API_BASE_URL } from "@config/urls"

export default function ListPlant({ image, scientificName, localName, category, onPress }) {
    const [plantImage, setPlantImage] = useState(null);

    useEffect(() => {
        const fetchPlantsData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/uploads/plantImages/${image}`);
                const imageURL = response.url
                if (response.ok) {
                    setPlantImage(imageURL)
                }
            } catch (error) {
                console.error('Error fetching plant image:', error);
            }
        };
        fetchPlantsData();
    }, []);

    return (
        <View className="flex-row items-center">
            <TouchableOpacity onPress={onPress} className="flex-row items-center flex-1 p-3 m-1 bg-white shadow-md rounded-2xl">
                <Image source={{ uri: plantImage }} className="mr-4 rounded-full w-14 h-14" />
                <View>
                    <Text className="text-black font-josesans">{localName}</Text>
                    <Text className="text-xs italic font-josesans text-emerald-500">{scientificName}</Text>
                    <View className="flex-row">
                        {(() => {
                            const hasMedicine = category.hasOwnProperty('Medicine');
                            const hasConsumable = category.hasOwnProperty('Consumable');
                            const hasOrnamental = category.hasOwnProperty('Ornamental');
                            return createPlantTag(hasMedicine, hasConsumable, hasOrnamental);
                        })()}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

function createPlantTag(isMedicine, isConsumable, isAromatic) {
    return (
        <View className="flex-row">
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