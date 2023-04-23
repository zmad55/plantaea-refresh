import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, StatusBar, Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native";
import CustomImageSlider from '../components/CustomImageSlider';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <SafeAreaView className='flex-1'>
                <ScrollView className='bg-white'>
                    <View className='flex-1'>
                        <Text className='m-2 p-2 text-2xl font-bold text-teal-800'>Hello Name</Text>
                    </View>
                    <TouchableOpacity
                        className="bg-white flex-row items-center border border-blue-200 rounded-lg px-5 py-2 mt-2 mb-5 mx-4"
                        onPress={() => navigation.navigate('PlantLibraryStack')}
                    >
                        <Feather name="search" size={20} color="#1C4C4E" style={{ marginRight: 5 }} />
                        <Text style={{ flex: 1, paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 0, color: '#1C4C4E' }}>Search</Text>
                    </TouchableOpacity>
                    <View className="h-1 bg-gray-300 my-1 mx-4" />
                    <View className="flex-1 justify-center bg-white ">
                        <CustomImageSlider />
                    </View>
                    <View className="h-1 bg-gray-300 my-1 mx-4" />
                    <View className='flex-row justify-center'>
                        <View className='p-1 m-2 w-40 h-75 rounded-lg bg-gray-200 shadow-md'>
                            <TouchableOpacity onPress={() => navigation.navigate('PlantLibraryStack')} >
                                <Image
                                    source={require('../assets/images/learn-icon.png')}
                                    resizeMode="contain"
                                    className='w-20 h-20 self-center m-2'
                                />
                                <Text className='text-2xl font-bold text-teal-800 text-center'>GUIDE</Text>
                                <Text className='text-lg text-center'>Knowledge is within reach</Text>
                            </TouchableOpacity>
                        </View>

                        <View className='p-1 m-2 w-40 h-75 rounded-lg bg-gray-200 shadow-md'>
                            <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                                <Image
                                    source={require('../assets/images/explore-icon.png')}
                                    resizeMode="contain"
                                    className='w-20 h-20 self-center rounded-full m-2'
                                />
                                <Text className='text-2xl font-bold text-teal-800 text-center'>EXPLORE</Text>
                                <Text className='text-lg text-center'>Find the wonders around you</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    headingText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1C4C4E',
    },
    bodyText: {
        textAlign: "center",
        fontSize: 15,
    },
    containerLE: {
        margin: 17,
        width: 150,
        height: 210,
        borderRadius: 10,
        opacity: 20,
        backgroundColor: '#ecf0f1',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    }, containerT: {
        margin: 17,
        width: 320,
        height: 130,
        borderRadius: 10,
        opacity: 20,
        backgroundColor: '#ecf0f1',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    }, slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
