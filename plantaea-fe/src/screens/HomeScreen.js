import {  Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';


const HomeScreen = ({ navigation }) => {
    return (
        <View className="flex-1 pt-6 bg-white">
            <SafeAreaView className="flex-1 bg-grayish-green">
                <View className="p-2 pb-5 bg-white rounded-b-3xl">
                    <View className="align-center justify-between bg-white pt-2">
                        {/* <View>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <ImageBackground source={require('../assets/images/hamburgerMenu-icon.png')} style={{width:30,height:30}} />
                </TouchableOpacity>   
                </View> fontSize: 20,
        color: '#1C4C4E',
        fontFamily: 'Helvetica',
        letterSpacing: 10*/}
                        <View>
                            <Text className="text-2xl text-emerald-800 self-center font-light font-josesans tracking-widest" >PLANTAEA</Text>
                        </View>
                    </View>
                    <Image
                        source={require('../../assets/images/undraw-arts/undraw_gardening_clear.png')}
                        resizeMode="contain"
                        className="w-full h-48 my-2 self-center"
                    // style={{ width: windowWidth, height: 200, marginTop: 2, marginBottom: 10 }}
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
                            <TouchableOpacity onPress={() => navigation.navigate('CameraStack')}>
                                <View className="w-36 h-44 p-1 rounded-xl bg-white opacity-90">
                                    <Image
                                        source={require('../../assets/images/undraw-arts/undraw_camera_clear.png')}
                                        resizeMode="contain"
                                        className="w-full h-24 self-center m-1"
                                    />
                                    <Text className="text-center text-2xl text-emerald-800 font-light font-josesans">SCAN</Text>
                                    <Text className="text-center text-gray-500 text-sm font-josesans">Scan a plant</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("MapStack")}>
                                <View className="w-36 h-44 p-1 rounded-xl bg-white opacity-90">
                                    <Image
                                        source={require('../../assets/images/undraw-arts/undraw_currentlocation_clear.png')}
                                        resizeMode="contain"
                                        className="w-full h-24 self-center m-1"
                                    />
                                    <Text className="text-center text-2xl text-emerald-800 font-light font-josesans">LOCATE</Text>
                                    <Text className="text-center text-gray-500 text-sm font-josesans">Find it fast</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row justify-evenly pt-5">
                            <TouchableOpacity onPress={() => navigation.navigate('LibraryStack')}>
                                <View className="w-36 h-44 p-1 rounded-xl bg-white opacity-90">
                                    <Image
                                        source={require('../../assets/images/undraw-arts/undraw_bookshelf_clear.png')}
                                        resizeMode="contain"
                                        className="w-48 h-24 self-center m-1"
                                    />
                                    <Text className="text-center text-2xl text-emerald-800 font-light font-josesans">LIBRARY</Text>
                                    <Text className="text-center text-gray-500 text-sm font-josesans">Browse plants</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('--')}>
                                <View className="w-36 h-44 p-1 rounded-xl bg-white opacity-90">
                                    <Image
                                        source={require('../../assets/images/undraw-arts/undraw_question_clear.png')}
                                        resizeMode="contain"
                                        className="w-48 h-24 self-center m-1"
                                    />

                                    <Text className="text-center text-2xl text-emerald-800 font-light font-josesans">GUIDE</Text>
                                    <Text className="text-center text-gray-500 text-sm font-josesans">Need help?</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen;



