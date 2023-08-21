import { View, Text, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
import PlantCard from '../components/PlantCard'


const IdentificationResultsScreen = ({ navigation, route }) => {
  const data = route.params?.data
  const regularData = data.responseJson.features

  console.log(regularData)
  return (
    <View className="flex-1 pt-10">
      <View className="px-2 pb-2 rounded-b-3xl">
        <Text className="self-center text-2xl font-light tracking-widest text-emerald-800 font-josesans-reg">Plant Results</Text>
      </View>

      <View className="overflow-visible flex justify-center flex-1 bg-slate-300 mt-5 rounded-2xl pt-32">
        {/* <Text>hello</Text> */}
        <Carousel
          containerCustomStyle={{ overflow: 'visible' }}
          data={regularData}
          renderItem={({ item }) => <PlantCard item={item} />}
          firstItem={0}
          loop={true}
          inactiveSlideScale={0.75}
          inactiveSlideOpacity={0.75}
          sliderWidth={width}
          itemWidth={width * 0.63}
          slideStyle={{ display: 'flex', alignItems: 'center' }}
        />
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');



export default IdentificationResultsScreen;
