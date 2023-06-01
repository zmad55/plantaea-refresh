import React, { useState } from "react";
import { Platform, StatusBar, View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image, ImageBackground } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import ListPlant from '../components/plant-library-screen/PlantListItem'
import InitiateCategoryTabs from "../components/plant-library-screen/PlantLibraryScreen-CategoryTabs";

import { plantListLibrary } from '../data/plantData'

const PlantLibraryScreen = ({ navigation, route }) => {

  const [descriptionTab, setDescriptionTab] = useState(1);

  const onSelectSwitch = (value) => {
    setDescriptionTab(value);
  }

  const renderPlantListItem = (item) => (
    <ListPlant
      key={item.id}
      image={item.image}
      scientificName={item.scientificName}
      localName={item.localName}
      category={item.category}
      onPress={() =>
        navigation.navigate("Plant Details", {
          image: item.image,
          scientificName: item.scientificName,
          localName: item.localName,
          description: item.description,
          use: item.use,
          taxonomy: item.taxonomy,
          category: item.category,
          id: item.id,
        })
      }
    />
  );

  return (
    <SafeAreaView className="flex-1 pt-6 bg-white">
      <View className="overflow-hidden">
        <View className="bg-white items-center shadow-2xl mt-4 rounded-b-2xl">
          <Text className="font-light font-josesans tracking-widest text-2xl text-emerald-800 mb-4">
            PLANT LIBRARY
          </Text>
          {/* <Image
            source={require('../../assets/images/undraw-arts/undraw_bookshelf_clear.png')}
            resizeMode="contain"
            className="w-4/5 h-44 my-2 self-center"
          /> */}
          <View className="px-8 flex-row justify-between items-center rounded-md">
            <InitiateCategoryTabs
              selectionMode={1}
              option1="All"
              option2="Medicine"
              option3="Consumable"
              option4="Ornamental"
              onSelectSwitch={onSelectSwitch}
            />
          </View>
          <View className="border-b-2 border-gray-300 w-10/12" />
          <View className="flex-row items-center border border-gray-300 rounded-2xl px-4 py-1 mt-0 mb-3 mx-5">
            <Feather name="search" size={20} color="#1C4C4E" />
            <TextInput placeholder='Search' className="flex-1 pt-2 pr-12 pb-2 pl-2 text-gray-500" />
          </View>
        </View>
      </View>
      <ScrollView className="px-4 py-5 mt-0 bg-grayish-green rounded-t-2xl">
        {descriptionTab === 1 && <View>{plantListLibrary.map(renderPlantListItem)}</View>}
        {descriptionTab === 2 && (
          <View>
            {plantListLibrary
              .filter((item) => item.category[0] === "medicine")
              .map(renderPlantListItem)}
          </View>
        )}
        {descriptionTab === 3 && (
          <View>
            {plantListLibrary
              .filter((item) => item.category.includes("consumable"))
              .map(renderPlantListItem)}
          </View>
        )}
        {descriptionTab === 4 && (
          <View>
            {plantListLibrary
              .filter((item) => item.category.includes("ornamental"))
              .map(renderPlantListItem)}
          </View>
        )}
        <View className="padding-2 border-t-1 border-t-white mt-20" />
      </ScrollView>
    </SafeAreaView >
  )
}


export default PlantLibraryScreen