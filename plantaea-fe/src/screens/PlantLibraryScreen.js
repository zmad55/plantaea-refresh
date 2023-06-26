import React, { useState } from "react";
import { Platform, StatusBar, View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ListPlant from '@components/plant-library-screen/PlantListItem'
import InitiateCategoryTabs from "@components/plant-library-screen/PlantLibraryScreen-CategoryTabs";
import { plantListLibrary } from '@data/plantData'

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
    <SafeAreaView className="flex-1 bg-gray-200">
      <View className="items-center pt-6 bg-white shadow-2xl rounded-b-2xl">
        <Text className="mt-2 text-2xl font-light tracking-widest font-josesans-reg text-emerald-800">
          PLANT LIBRARY
        </Text>
        <View className="flex-row items-center justify-between px-8 mt-8 rounded-md">
          <InitiateCategoryTabs
            selectionMode={1}
            option1="All"
            option2="Medicine"
            option3="Consumable"
            option4="Ornamental"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
      </View>
      <ScrollView className="px-4 rounded-t-2xl">
        <View className="my-2">
          <TouchableOpacity
            className="flex-row items-center justify-between px-4 py-1 bg-white border border-gray-300 rounded-full shadow-md"
            onPress={() => navigation.navigate('PlantLibraryStack')}
          >
            <Text className="flex-1 pt-2 pb-2 pr-12 text-gray-700 font-josesans">Search plant</Text>
            <Ionicons
              name="search-sharp"
              size={22}
              className="mr-0 text-emerald-500" />
          </TouchableOpacity>
        </View>
        <View>
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
        </View>
        <View className="mt-20 padding-2 border-t-1 border-t-white" />
      </ScrollView>
    </SafeAreaView >
  )
}


export default PlantLibraryScreen