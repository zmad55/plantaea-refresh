import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, StatusBar, Platform, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";

import ListPlant from "@components/plantLibraryScreen/ListPlant";
import CategoryTab from "@components/plantLibraryScreen/CategoryTab";

import { useFetchPlantsDataQuery } from "@redux/slices/plantApiSlice";
import { setPlantsData } from "@redux/slices/plantSlice";

const PlantLibraryScreen = ({ navigation, route }) => {
  const { data: plants, isLoading, isError } = useFetchPlantsDataQuery();

  // const [category, setCategory] = useState("all");
  // const filterPlantsByCategory = (category) => {
  //   setCategory(category);
  // };

  const renderPlantListItem = ({ item }) => (
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

  const [plantsFiltered, setPlantsFiltered] = useState([])
  useEffect(() => {
    setPlantsFiltered(plants);
  }, [plants]);
  
  const filteredPlants = (category) => {
    try {
      if (category !== "all") {
        setPlantsFiltered(plants.filter((item) => item.category.flat().includes(category)))
      } else {
        setPlantsFiltered(plants)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView className="bg-white pt-10 flex-1 h-full">
      {/* <StatusBar style="light" /> */}
      {isLoading &&
        <View className="flex flex-col items-center justify-center h-full">
          <ActivityIndicator animating={true} color="darkgreen" size="large" />
        </View>}
      {!isLoading && isError ? (
        <Text>Error in fetching plants data...</Text>
      ) : null}
      {!isLoading && plants.length ? (
        <View className="h-full bg-gray-200">
          <View className="items-center bg-white shadow-2xl rounded-b-2xl mb-2">
            <Text className="text-2xl font-light tracking-widest font-josesans-reg text-emerald-800">PLANT LIBRARY</Text>
            <View className="flex-row items-center justify-between px-8 mt-6 rounded-md">
              <CategoryTab
                selectionMode={"all"}
                optionsData={[
                  { label: "all", color: "green-800", value: 1 },
                  { label: "medicine", color: "red-400", value: 2 },
                  { label: "consumable", color: "yellow-500", value: 3 },
                  { label: "ornamental", color: "pink-400", value: 4 }]}
                onSelectSwitch={filteredPlants}
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
          <View className="rounded-3xl mx-2 flex-1 mb-7">
            {/* <ScrollView> */}
            {/* <View> */}
            {/* {filteredPlants(category, plants)} */}
            {/* {plantsFiltered.map(item => (
                  <View>{renderPlantListItem(item)}</View>
                ))} */}
            <FlatList
              data={plantsFiltered}
              renderItem={renderPlantListItem}
              keyExtractor={(item) => item._id.toString()}
              numColumns={1}
            />
            {/* </View> */}
            {/* </ScrollView> */}
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default PlantLibraryScreen;