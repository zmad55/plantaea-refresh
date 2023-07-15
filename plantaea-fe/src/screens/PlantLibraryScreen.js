import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, StatusBar, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";

import ListPlant from "@components/plantLibraryScreen/ListPlant";
import CategoryTab from "@components/plantLibraryScreen/CategoryTab";

import { useFetchPlantsDataQuery } from "@redux/slices/plantApiSlice";
import { setPlantsData } from "@redux/slices/plantSlice";

const PlantLibraryScreen = ({ navigation, route }) => {
  const { data: plants, isLoading, isError } = useFetchPlantsDataQuery();

  const [descriptionTab, setDescriptionTab] = useState(1);
  const onSelectSwitch = (value) => {
    setDescriptionTab(value);
  };

  const renderPlantListItem = (item) => (
    <ListPlant
      key={item._id}
      image={item.imgFileName}
      scientificName={item.scientificName}
      localName={item.localName}
      category={item.category.flat()}
      onPress={() =>
        navigation.navigate("Plant Details", {
          image: item.imgFileName,
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
    <SafeAreaView className="flex-1 pt-10 bg-white">
      <View className="bg-gray-200 h-full">
        {isLoading &&
          <View className="flex flex-col items-center justify-center h-full">
            <ActivityIndicator animating={true} color="darkgreen" size="large" />
          </View>
        }
        {!isLoading && isError ? (
          <Text>Error in fetching plants data...</Text>
        ) : null}
        {!isLoading && plants.length ? (
          <View>
            <View className="items-center bg-white shadow-2xl rounded-b-2xl mb-2">
              <Text className="text-2xl font-light tracking-widest font-josesans-reg text-emerald-800">PLANT LIBRARY</Text>
              <View className="flex-row items-center justify-between px-8 mt-6 rounded-md">
                <CategoryTab
                  selectionMode={1}
                  option1="All"
                  option2="Medicine"
                  option3="Consumable"
                  option4="Ornamental"
                  onSelectSwitch={onSelectSwitch}
                />
              </View>
              <View className="mb-4 w-full px-5">
                <TouchableOpacity
                  className="flex-row items-center justify-between px-4 py-1 bg-white border border-gray-300 rounded-xl shadow-md"
                  onPress={() => navigation.navigate("PlantLibraryStack")}
                >
                  <Text className="flex-1 pt-2 pb-2 pr-12 text-gray-700 font-josesans">
                    Search plant
                  </Text>
                  <Ionicons
                    name="search-sharp"
                    size={22}
                    className="mr-0 text-emerald-500"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView className="px-4 rounded-t-2xl">
              <View>
                {descriptionTab === 1 && (
                  <View>{plants.map(renderPlantListItem)}</View>
                )}
                {descriptionTab === 2 && (
                  <View>
                    {plants
                      .filter((item) =>
                        item.category.flat().includes("medicine")
                      )
                      .map(renderPlantListItem)}
                  </View>
                )}
                {descriptionTab === 3 && (
                  <View>
                    {plants
                      .filter((item) =>
                        item.category.flat().includes("consumable")
                      )
                      .map(renderPlantListItem)}
                  </View>
                )}
                {descriptionTab === 4 && (
                  <View>
                    {plants
                      .filter((item) =>
                        item.category.flat().includes("ornamental")
                      )
                      .map(renderPlantListItem)}
                  </View>
                )}
              </View>
              <View className="mt-20 padding-2 border-t-1 border-t-white" />
            </ScrollView>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const renderPlants = (descriptionTab) => {
  const filteredPlants = plants.filter((plant) => {
    if (descriptionTab === 1) {
      return true;
    } else if (descriptionTab === 2 && plant.category.includes("medicine")) {
      return true;
    } else if (descriptionTab === 3 && plant.category.includes("consumable")) {
      return true;
    } else if (descriptionTab === 4 && plant.category.includes("ornamental")) {
      return true;
    } else {
      return false;
    }
  });
  return filteredPlants.map(renderPlantListItem);
}

export default PlantLibraryScreen;
