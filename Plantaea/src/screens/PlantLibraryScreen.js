import React, { useState } from "react";
import { Platform, StatusBar, View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, Image, ImageBackground } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import { alignItems } from 'react-native-wind/dist/styles/flex/align-items'
import ListItem from '../components/ListItem'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSwitchLibrary from "../components/CustomSwitchLibrary";
import { windowWidth, windowHeight } from '../utils/Dimensions';
import { plantListLibrary } from '../data/data'

const PlantLibrary = ({ navigation, route }) => {

  const [descriptionTab, setDescriptionTab] = useState(1);
  const onSelectSwitch = (value) => {
    setDescriptionTab(value);
  }
  //style={{ flex: 1, padding: 5, paddingTop: windowHeight - (windowHeight - 25), backgroundColor: 'white' }}
  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <SafeAreaView className="flex-1">
        <View className="overflow-hidden, padding-bottom: 5">
          <SafeAreaView className="bg-white flex items-center shadow-black shadow-offset-width-1 shadow-offset-height-1 shadow-opacity-100 shadow-radius-3.5 shadow-elevation-5">
            <Image
              source={require('../../assets/plantaea-logo.png')}
              resizeMode="contain"
              className="w-20 h-20 mt-2 mb-2"
            />
            <Text className="font-bold text-2xl text-teal-800 mb-4">
              ETHNOBOTANICAL PLANTS
            </Text>
            <View className="px-5 flex-row justify-between items-center">
              <CustomSwitchLibrary
                selectionMode={1}
                option1="All"
                option2="Medicine"
                option3="Consumable"
                option4="Ornamental"
                onSelectSwitch={onSelectSwitch}
              />
            </View>
            <View className="flex-row items-center border border-gray-300 rounded-2xl px-4 py-1 mb-1 mx-5">
            <Feather name="search" size={20} color="#1C4C4E" style={{ marginRight: 5 }} />
              <TextInput placeholder='Search'  className="flex-1 pt-2 pr-10 pb-2 pl-0 rounded-none" />
            </View>
          </SafeAreaView>
        </View>
        <ScrollView style={{ paddingHorizontal: 15, paddingVertical: 15, marginTop: 0 }}>
          {descriptionTab == 1 &&
            <View>
              {plantListLibrary.map(item => (
                <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category}
                  onPress={() => navigation.navigate('PlantDetails', { image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, category: item.category, id: item.id })} />
              ))
              }
            </View>
          }
          {descriptionTab == 2 &&
            <View>
              {plantListLibrary.map(item => (
                item.category[0] == 'medicine' ?
                  <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category}
                    onPress={() => navigation.navigate('PlantDetails', { image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, category: item.category, id: item.id })} />
                  : null
              ))
              }
            </View>
          }
          {descriptionTab == 3 &&
            <View>
              {plantListLibrary.map(item => (
                item.category[0] == 'consumable' || item.category[1] == 'consumable' ?
                  <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category}
                    onPress={() => navigation.navigate('PlantDetails', { image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, category: item.category, id: item.id })} />
                  : null
              ))
              }
            </View>
          }
          {descriptionTab == 4 &&
            <View>
              {plantListLibrary.map(item => (
                item.category[0] == 'ornamental' || item.category[1] == 'ornamental' || item.category[2] == 'ornamental' ?
                  <ListItem key={item.id} image={item.image} scientificName={item.scientificName} localName={item.localName} category={item.category}
                    onPress={() => navigation.navigate('PlantDetails', { image: item.image, scientificName: item.scientificName, localName: item.localName, description: item.description, use: item.use, taxonomy: item.taxonomy, category: item.category, id: item.id })} />
                  : null
              ))
              }
            </View>
          }

          <View style={{ padding: 7, borderTopWidth: 1, borderTopColor: 'white', marginTop: 60 }} />
        </ScrollView>
      </SafeAreaView >
    </View>
  )
}

export default PlantLibrary

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 5
  }
});