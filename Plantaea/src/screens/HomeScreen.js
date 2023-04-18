import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView, ImageBackground, ScrollView, Image } from 'react-native';
import { useColorScheme } from "nativewind";
import { TouchableOpacity } from "react-native";

import { getDeviceHeight } from './../utils/deviceDimensions';
import { getDeviceWidth } from './../utils/deviceDimensions';

export default function HomeScreen() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <SafeAreaView className="lg:p-10 md:p-8 sm:p-6 flex-1 bg-white">
            <SafeAreaView className="lg:p-40">
                <View className="flex-row items-center mb-1">
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={require('../assets/images/hamburgerMenu-icon.png')}
                            className="w-12 h-12 rounded-full"
                            imageStyle={{ borderRadius: 20 }}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView className="flex-1 bg-white">
                <View className="flex-1 items-center">
                    <Image
                        source={require('../assets/images/plant-library-icon.png')}
                        resizeMode="contain"
                        className="w-20 h-20"
                    />
                    <Text className="text-4xl font-bold my-4">PLANTAEA</Text>
                </View>

                <View className="p-4 border-t border-gray-300" />

                <View>
                    <Text className="text-2xl font-bold text-teal-800">TRIVIA OF THE DAY</Text>
                </View>
                <View className="m-4 w-80 h-40 rounded-md opacity-20 bg-gray-200 shadow-md" />

                <View className="p-4 border-t border-gray-300 mt-6" />

                <View className="flex-row justify-center">
                    <TouchableOpacity onPress={() => navigation.navigate('PlantLibraryStack')}>
                        <View className="m-4 w-44 h-60 rounded-md opacity-20 bg-gray-200 shadow-md">
                            <Image
                                source={require('../assets/images/learn-icon.png')}
                                resizeMode="contain"
                                className="w-20 h-20 self-center m-10"
                            />
                            <Text className="text-2xl font-bold text-teal-800">LEARN</Text>
                            <Text className="text-lg text-center">Knowledge is within reach</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                        <View className="m-4 w-44 h-60 rounded-md opacity-20 bg-gray-200 shadow-md">
                            <Image
                                source={require('../assets/images/explore-icon.png')}
                                resizeMode="contain"
                                className="w-20 h-20 self-center rounded-full m-10"
                            />
                            <Text className="text-2xl font-bold text-teal-800">EXPLORE</Text>
                            <Text className="text-lg text-center">Find the wonders around you</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
                <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>

    );
}

