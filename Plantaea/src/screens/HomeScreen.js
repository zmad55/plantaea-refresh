import { StyleSheet, Text, View, Switch, SafeAreaView, ImageBackground, ScrollView, Image, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather'
import Swiper from 'react-native-swiper'

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
                    <TouchableOpacity 
                    style={{ backgroundColor:'white',flexDirection:'row', alignItems:'center', borderColor:'#E1F6F7', borderWidth:1, borderRadius:8, paddingHorizontal:10,paddingVertical:10, marginTop:2,marginBottom:5, marginHorizontal:20}}
                    onPress={()=>navigation.navigate('PlantLibraryStack')}
                >
                        <Feather name="search" size={20} color="#1C4C4E" style={{marginRight:5}} />
                        <Text style={{flex: 1, paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 0,color:'#1C4C4E'}}>Search</Text>
                </TouchableOpacity>

                <View style={styles.sliderContainer}>
                    <Swiper autoplay height={200} activeDotColor="white" removeClippedSubviews={false}>
                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('./../../assets/banners/plant-banner1.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>PLANTS ARE GAY</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('./../../assets/banners/plant-banner2.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>There are over 200,000 identified plant species and the list is growing all the time. 90 percent of the foods humans eat come from just 30 plants. An average size tree can provide enough wood to make 170,100 pencils.</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('./../../assets/banners/plant-banner3.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>sample text</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('./../../assets/banners/plant-banner4.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>sample text</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('./../../assets/banners/plant-banner5.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>sample text</Text>
                                </ImageBackground>           
                            </View>

                            <View styles={styles.slide}>
                                <ImageBackground
                                    source={require('./../../assets/banners/plant-banner6.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                    imageStyle={{borderRadius:10}}
                                >
                                <Text style={{color:'white'}}>Some Plants help with Skincare</Text>
                                </ImageBackground>           
                            </View>

                    </Swiper>
                </View>
                    <View className='flex-row justify-center'>
                        <TouchableOpacity onPress={() => navigation.navigate('PlantLibraryStack')} >
                            <View className='p-1 m-2 w-40 h-75 rounded-lg bg-gray-200 shadow-md'>
                                <Image
                                    source={require('../assets/images/learn-icon.png')}
                                    resizeMode="contain"
                                    className='w-20 h-20 self-center m-2'
                                />
                                <Text className='text-2xl font-bold text-teal-800 text-center'>GUIDE</Text>
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

const  styles = StyleSheet.create({
    headingText:{
        textAlign: "center",
        fontSize:20,
        fontWeight: 'bold',
        color:'#1C4C4E',
     },
     bodyText:{
        textAlign: "center",
        fontSize:15,
     },
    containerLE:{
        margin: 17,
        width: 150,
        height : 210,
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
    }, containerT:{
        margin: 17,
        width: 320,
        height : 130,
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
        height:200,
        width:'90%',
        marginTop:10,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:8,
    }, slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'transparent',
        borderRadius:8,
    },
    sliderImage: {
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:8,
        justifyContent: 'center',
        alignItems:'center',
    }
})
