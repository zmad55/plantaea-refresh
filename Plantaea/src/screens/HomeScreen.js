import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView, ImageBackground, ScrollView, Image } from 'react-native';
import { useColorScheme } from "nativewind";
import { TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <SafeAreaView className='flex-1 p-5 top-3'>
            <View className='flex-row items-center mb-1'>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require('./../assets/images/hamburgerMenu-icon.png')}
                        resizeMode="contain"
                        className='w-12 h-12 rounded-full'
                    />
                </TouchableOpacity>
            </View>


            <ScrollView className='flex-1 bg-white'>
                <View className='flex-1 items-center'>
                    <Image
                        source={require('../assets/images/plant-library-icon.png')}
                        resizeMode="contain"
                        className='w-20 h-20'
                    />
                    <Text className='text-4xl font-bold my-4'>PLANTAEA</Text>
                </View>

                <View className='p-2 border-t border-gray-300' />

                <Text className='m-2 left-2 text-2xl font-bold text-teal-800'>TRIVIA OF THE DAY</Text>

                <View className='m-2 flex-1 items-center'>
                    <View className='m-4 w-80 h-40 rounded-md opacity-20 bg-gray-200 shadow-md' />
                </View>
                <View className='p-4 border-t border-gray-300 mt-6' />

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

            {/* <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
                <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar/>
            </View>  */}
        </SafeAreaView>
    );
}

