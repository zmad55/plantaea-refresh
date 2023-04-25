import React, { useState } from "react";
import { Platform, StatusBar, View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image, ImageBackground } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import ListItem from '../components/ListItem'
import CustomSwitchLibrary from "../components/CustomSwitchLibrary";
import { plantListLibrary } from '../data/data'

const PlantLibrary = ({ navigation, route }) => {

  const [descriptionTab, setDescriptionTab] = useState(1);
  const onSelectSwitch = (value) => {
    setDescriptionTab(value);
  }

  const renderPlantListItem = (item) => (
    <ListItem
      key={item.id}
      image={item.image}
      scientificName={item.scientificName}
      localName={item.localName}
      category={item.category}
      onPress={() =>
        navigation.navigate("PlantDetails", {
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
    <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <SafeAreaView className="flex-1">
        <View className="overflow-hidden">
          <SafeAreaView className="bg-white items-center shadow-2xl">
            <Image
              source={require('../../assets/plantaea-logo.png')}
              resizeMode="contain"
              className="w-20 h-20 mt-2 mb-2"
            />
            <Text className="font-bold text-2xl text-teal-800 mb-4">
              ETHNOBOTANICAL PLANTS
            </Text>
            <View className="px-8 flex-row justify-between items-center rounded-md">
              <CustomSwitchLibrary
                selectionMode={1}
                option1="All"
                option2="Medicine"
                option3="Consumable"
                option4="Ornamental"
                onSelectSwitch={onSelectSwitch}
              />
            </View>
            <View className="border-b-2 border-gray-300 w-10/12" />
            <View className="flex-row items-center border border-gray-300 rounded-2xl px-4 py-1 mt-1 mb-1 mx-5">
              <Feather name="search" size={20} color="#1C4C4E" />
              <TextInput placeholder='Search' className="flex-1 pt-2 pr-12 pb-2 pl-2 text-gray-500" />
            </View>
          </SafeAreaView>
        </View>
        <ScrollView className="px-4 py-5 mt-0">
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
    </View>
  )
}

export default PlantLibrary