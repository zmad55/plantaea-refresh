import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';

import DirectoryCard from '../components/home-screen/HomeScreen-Directories'

const HomeScreen = ({ navigation }) => {
    return (
        <View className="flex-1 pt-6 bg-white">
            <SafeAreaView className="flex-1 bg-grayish-green">
                <View className="p-2 pb-5 bg-white rounded-b-3xl">
                    <View className="justify-between pt-2 bg-white align-center">
                        <View>
                            <Text className="self-center text-2xl font-light tracking-widest text-emerald-800 font-josesans" >PLANTAEA</Text>
                        </View>
                    </View>
                    <Image
                        source={require('../../assets/images/undraw-arts/undraw_gardening_clear.png')}
                        resizeMode="contain"
                        className="self-center w-full h-48 my-2"
                    >
                    </Image>
                    <TouchableOpacity
                        className="flex-row items-center justify-between px-4 py-1 bg-white border border-gray-300 shadow-md rounded-2xl mx-9"
                        onPress={() => navigation.navigate('PlantLibraryStack')}
                    >
                        <Text className="flex-1 pt-2 pb-2 pr-12 text-gray-700 font-josesans">Search plant</Text>
                        <Feather name="search" size={20} color="#1C4C4E" className="mr-5" />
                    </TouchableOpacity>
                </View>
                <ScrollView className="flex-1 py-4 align-center">
                    <View className="flex-1 mx-2 my-1">
                        <View className="flex-row justify-evenly">
                            <DirectoryCard
                                imageSource={require('../../assets/images/undraw-arts/undraw_camera_clear.png')}
                                title="SCAN"
                                description="Scan a plant"
                                onPressAction={() => navigation.navigate('CameraStack')}
                            />
                            <DirectoryCard
                                imageSource={require('../../assets/images/undraw-arts/undraw_currentlocation_clear.png')}
                                title="LOCATE"
                                description="Find it fast"
                                onPressAction={() => navigation.navigate('MapStack')}
                            />
                        </View>
                        <View className="flex-row pt-5 justify-evenly">
                            <DirectoryCard
                                imageSource={require('../../assets/images/undraw-arts/undraw_bookshelf_clear.png')}
                                title="LIBRARY"
                                description="Browse plants"
                                onPressAction={() => navigation.navigate('LibraryStack')}
                            />
                            <DirectoryCard
                                imageSource={require('../../assets/images/undraw-arts/undraw_question_clear.png')}
                                title="GUIDE"
                                description="Need help?"
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



