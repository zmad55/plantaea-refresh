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
                    <View className="align-center justify-between bg-white pt-2">
                        <View>
                            <Text className="text-2xl text-emerald-800 self-center font-light font-josesans tracking-widest" >PLANTAEA</Text>
                        </View>
                    </View>
                    <Image
                        source={require('../../assets/images/undraw-arts/undraw_gardening_clear.png')}
                        resizeMode="contain"
                        className="w-full h-48 my-2 self-center"
                    >
                    </Image>
                    <TouchableOpacity
                        className="flex-row items-center justify-between bg-white border border-gray-300 rounded-2xl px-4 py-1 mx-9 shadow-md"
                        onPress={() => navigation.navigate('PlantLibraryStack')}
                    >
                        <Text className="flex-1 pt-2 pr-12 pb-2 text-gray-700 font-josesans">Search plant</Text>
                        <Feather name="search" size={20} color="#1C4C4E" className="mr-5" />
                    </TouchableOpacity>
                </View>
                <ScrollView className="align-center flex-1 py-4">
                    <View className="flex-1 my-1 mx-2">
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
                        <View className="flex-row justify-evenly pt-5">
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



