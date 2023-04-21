import { StyleSheet, Text, View, Switch, SafeAreaView, ImageBackground, ScrollView, Image, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <SafeAreaView className='flex-1'>
                <ScrollView className='bg-white'>
                    <View className='flex-1'>
                        <Text className='m-2 p-2 text-2xl font-bold text-teal-800'>TRIVIA OF THE DAY</Text>
                        <View className='m-2 flex-1 items-center'>
                            <View className='m-4 w-80 h-40 rounded-md opacity-20 bg-gray-200 shadow-md' />
                        </View>
                        <View className='p-4 border-t border-gray-300 mt-6' />
                    </View>
                    <View className='flex-row justify-center'>
                        <TouchableOpacity onPress={() => navigation.navigate('PlantLibraryStack')} >
                            <View className='p-1 m-2 w-40 h-75 rounded-lg bg-gray-200 shadow-md'>
                                <Image
                                    source={require('../assets/images/learn-icon.png')}
                                    resizeMode="contain"
                                    className='w-20 h-20 self-center m-2'
                                />
                                <Text className='text-2xl font-bold text-teal-800 text-center'>LEARN</Text>
                                <Text className='text-lg text-center'>Knowledge is within reach</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                            <View className='p-1 m-2 w-40 h-75 rounded-lg bg-gray-200 shadow-md'>
                                <Image
                                    source={require('../assets/images/explore-icon.png')}
                                    resizeMode="contain"
                                    className='w-20 h-20 self-center rounded-full m-2'
                                />
                                <Text className='text-2xl font-bold text-teal-800 text-center'>EXPLORE</Text>
                                <Text className='text-lg text-center'>Find the wonders around you</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen;