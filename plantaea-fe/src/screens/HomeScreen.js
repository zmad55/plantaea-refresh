import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

import DirectoryCard from '../components/home-screen/HomeScreen-Directories'

const HomeScreen = ({ navigation }) => {
    return (
        <View className="flex-1 pt-6 bg-white">
            <SafeAreaView className="flex-1 bg-gray-200">
                <View className="p-2 pb-5 bg-white rounded-b-3xl">
                    <View className="justify-between pt-2 bg-white align-center">
                        <View>
                            <Text className="self-center text-2xl font-light tracking-widest text-emerald-800 font-josesans-reg" >Good Day</Text>
                        </View>
                    </View>
                    <Image
                        source={require('../../assets/images/undraw-arts/undraw_gardening_clear.png')}
                        resizeMode="contain"
                        className="self-center w-full h-48 my-2"
                    >
                    </Image>
                </View>
                <ScrollView className="flex-1 align-center">
                    <TouchableOpacity
                        className="flex-row items-center justify-between px-4 py-1 my-5 bg-white border border-gray-300 rounded-full shadow-md mx-11"
                        onPress={() => navigation.navigate('PlantLibraryStack')}
                    >
                        <Text className="flex-1 pt-2 pb-2 pr-12 text-gray-700 font-josesans">Search plant</Text>
                        <Ionicons
                            name="search-sharp"
                            size={22}
                            className="mr-0 text-emerald-500" />
                    </TouchableOpacity>
                    <View className="flex-1 mx-2">
                        <View className="flex-row justify-evenly">
                            <DirectoryCard
                                iconName={"scan-circle-sharp"}
                                // imageSource={require('../../assets/images/undraw-arts/undraw_camera_clear.png')}
                                title="SCAN"
                                description="Identify Leaves"
                                onPressAction={() => navigation.navigate('CameraStack')}
                            />
                            <DirectoryCard
                                iconName={"map-sharp"}
                                // imageSource={require('../../assets/images/undraw-arts/undraw_currentlocation_clear.png')}
                                title="MAP"
                                description="Provincial Data"
                                onPressAction={() => navigation.navigate('MapStack')}
                            />
                        </View>
                        <View className="flex-row pt-5 justify-evenly">
                            <DirectoryCard
                                iconName={"library-sharp"}
                                // imageSource={require('../../assets/images/undraw-arts/undraw_bookshelf_clear.png')}
                                title="LIBRARY"
                                description="Browse Plants"
                                onPressAction={() => navigation.navigate('LibraryStack')}
                            />
                            <DirectoryCard
                                iconName={"journal-sharp"}
                                // imageSource={require('../../assets/images/undraw-arts/undraw_question_clear.png')}
                                title="Guide"
                                description="Getting Started"
                                onPressAction={() => navigation.navigate('--')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen;



