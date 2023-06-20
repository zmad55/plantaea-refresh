import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FlipCard from 'react-native-flip-card'

import FeaturedPlantCardFront from '../components/home-screen/FeaturedPlantCardFront';
import FeaturedPlantCardBack from '../components/home-screen/FeaturedPlantCardBack';
import DirectoryCard from '../components/home-screen/HomeScreen-Directories'

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 mt-6 bg-gray-200">
                <View className="p-2 bg-white rounded-b-3xl">
                    <View className="justify-between pt-2 bg-white align-center">
                        <Text className="self-center text-2xl font-light tracking-widest text-emerald-800 font-josesans-reg" >Good Day</Text>
                        <ScrollView>
                            <FlipCard flipHorizontal={false} flipVertical={true} className="h-full my-5">
                                <FeaturedPlantCardFront text="Tap me"></FeaturedPlantCardFront>
                                <FeaturedPlantCardBack text="hai"></FeaturedPlantCardBack>
                            </FlipCard>
                        </ScrollView>

                    </View>
                </View>
                <ScrollView className="flex-1 align-center">
                    <View className="my-5 mx-11">
                        <TouchableOpacity
                            className="flex-row items-center justify-between px-4 py-1 bg-white border border-gray-300 rounded-full shadow-md"
                            onPress={() => navigation.navigate('PlantLibraryStack')}
                        >
                            <Text className="flex-1 pt-2 pb-2 pr-12 text-gray-700 font-josesans">Search plant</Text>
                            <Ionicons
                                name="search-sharp"
                                size={22}
                                className="mr-0 text-emerald-500" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 mx-2 mb-5">
                        <View className="flex-row justify-evenly">
                            <DirectoryCard
                                iconName={"scan-circle-sharp"}
                                title="SCAN"
                                description="Identify Leaves"
                                onPressAction={() => navigation.navigate('CameraStack')}
                            />
                            <DirectoryCard
                                iconName={"map-sharp"}
                                title="MAP"
                                description="Provincial Data"
                                onPressAction={() => navigation.navigate('MapStack')}
                            />
                        </View>
                        <View className="flex-row pt-5 justify-evenly">
                            <DirectoryCard
                                iconName={"library-sharp"}
                                title="LIBRARY"
                                description="Browse Plants"
                                onPressAction={() => navigation.navigate('LibraryStack')}
                            />
                            <DirectoryCard
                                iconName={"journal-sharp"}
                                title="Guide"
                                description="Getting Started"
                                onPressAction={() => navigation.navigate('--')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView>
    );
}

export default HomeScreen;



