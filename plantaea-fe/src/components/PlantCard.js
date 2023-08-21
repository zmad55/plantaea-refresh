import { View, Text, Image } from "react-native";
import React from "react";

const PlantCard = ({ total_rank, species }) => {
    console.log(total_rank)
    return (
        <View className="rounded-3xl bg-emerald-500 h-3/5 w-full">
            <View className="flex-row justify-center p-5">
                {/* <Image source={item.image} className="h-32 w-32 rounded-full"/> */}
            </View>
            <View className="items-center">
                <Text className="text-3xl text-emerald-200 font-josesans-reg">#{total_rank}</Text>
                <Text className="text-3xl text-emerald-200 font-josesans-reg">{species}</Text>
            </View>
        </View>
    );
};

export default PlantCard;
