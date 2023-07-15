import { Text, View, SafeAreaView, ScrollView, Image, Platform, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FlipCard from 'react-native-flip-card'

import { useDispatch, useSelector } from 'react-redux'

import FeaturedPlantCardFront from '@components/homeScreen/FeaturedPlantCardFront';
import FeaturedPlantCardBack from '@components/homeScreen/FeaturedPlantCardBack';
import DirectoryCard from '@components/homeScreen/DirectoryCard'

const HomeScreen = ({ navigation }) => {

    const { userInfo } = useSelector((state) => state.auth)
    const username = userInfo.user.charAt(0).toUpperCase() + userInfo.user.slice(1);

    return (
        <SafeAreaView className="flex-1 pt-10 bg-white">
            <View className="flex-1 bg-gray-200">
                <View className="px-2 pb-2 bg-white rounded-b-3xl">
                    <Text className="text-2xl font-light tracking-widest self-left text-emerald-800 font-josesans-reg pl-3">Good Day {username}</Text>
                    <ScrollView>
                        <FlipCard flipHorizontal={true} flipVertical={false} className="h-full my-5 mx-9">
                            <FeaturedPlantCardFront text="Tap me" />
                            <FeaturedPlantCardBack title="Lagundi" text='Or "Lagundi" is traditionally used to treat cough, fever, and clogged sinuses.' />
                        </FlipCard>
                    </ScrollView>
                </View>
                <ScrollView className="flex-1 align-center">
                    <View className="flex-1 mx-2 mb-5 my-5">
                        <View className="flex-row justify-evenly">
                            <DirectoryCard
                                iconName={"journal-sharp"}
                                title="Guide"
                                description="Getting Started"
                                onPressAction={() => navigation.navigate('?')}
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
                                iconName={"scan-circle-sharp"}
                                title="SCAN"
                                description="Identify Leaves"
                                onPressAction={() => navigation.navigate('CameraStack')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView>
    );
}

export default HomeScreen;



