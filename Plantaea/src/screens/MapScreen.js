import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { PlantsLocation } from '../data/IndigenousPlantsLocation';

const PlantLibrary = ({ navigation, route }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      // latitudeDelta: 0.0822
      latitudeDelta: 0.01,
      longitudeDelta: 0.002,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  }

  useEffect(() => {
    userLocation();
  }, []);

  function listDownType(PlantsLocation) {
    const uniqueType = ["Medicinal"]
    for (let i = 0; i < PlantsLocation.length; i++) {
      uniqueType.push(PlantsLocation[i].type)
    }
    const uniqueArray = [...new Set(uniqueType)]
    return uniqueArray
  }
  const lastArray = listDownType(PlantsLocation)

  function filterType(PlantsLocation, userInput) {
    const plantType = []
    for (let i = 0; i < PlantsLocation.length; i++) {
      if (PlantsLocation[i].type == userInput)
        plantType.push(PlantsLocation[i])
    }
    return plantType
  }

  const options = [
    { label: 'All', value: 'All', materialIcon_name: 'check-all', color: '#2196F3' },
    { label: 'Medicinal', value: 'Medicinal', materialIcon_name: '../../assets/images/medicine_marker.png', color: '#4CAF50' },
    { label: 'Consumable', value: 'Consumable', materialIcon_name: 'food-apple', color: '#FFC107' },
    { label: 'Ornament', value: 'Ornament', materialIcon_name: 'ornament', color: '#FFA000' },
  ];

  const [showMarkers, setShowMarker] = useState(options[0].value);
  const [isExpanded, setIsExpanded] = useState(false);

  const typeSelect = (value) => {
    setShowMarker(value);
    setIsExpanded(false);
  }

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity className="absolute top-3 left-3 z-50 w-12 h-12 rounded-full bg-white items-center justify-center"
          onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons name="arrow-left-bold-circle" size={40} color="green" />
        </TouchableOpacity>
        <View className="absolute top-3 right-3 z-50">
          <TouchableOpacity className="w-12 h-12 rounded-full bg-white items-center justify-center" onPress={handlePress}>
            <MaterialCommunityIcons name={isExpanded ? "close" : "filter"} size={35} color="green" />
          </TouchableOpacity>
          {isExpanded && (
            <View className="bg-white rounded-lg shadow-lg py-4 px-3 mt-4">
              <RadioButton.Group onValueChange={typeSelect} value={showMarkers}>
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    className="flex flex-row items-center space-x-3"
                    onPress={() => typeSelect(option.value)}
                  >
                    <Image source = {require(option.materialIcon_name)} style={{height: 35, width:35 }}/>
                    {/* <MaterialCommunityIcons name={option.materialIcon_name} size={25} color={option.color} /> */}
                    <RadioButton value={option.value} color={option.color} status={showMarkers === option.value ? 'checked' : 'unchecked'} />
                  </TouchableOpacity>
                ))}
              </RadioButton.Group>
            </View>
          )}
        </View>
        {/* <View style={styles.filterContainer}>
          <View style={{ borderBottomWidth: 1, }}>
            <Text style={{ textAlign: "center" }}>
              FIlter
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => typeSelect("All")}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => typeSelect("Medicinal")}>
              <Text>Medicinal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => typeSelect("Food")}>
              <Text>Food</Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 17.3513,
            longitude: 121.1719,
            latitudeDelta: 0,
            longitudeDelta: 2
          }}
        >
          {showMarkers === "All" &&
            <View>
              {PlantsLocation.map(item => (
                item.type == "Medicinal" ?
                  <Marker
                    title={item.name}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude
                    }}
                    key={item.id}
                  >
                    <Image source={require('../../assets/images/medicine_marker.png')} style={{ height: 35, width: 35 }} />
                    <Callout
                      tooltip
                      onPress={() => navigation.navigate('PlantDetails',
                        {
                          image: item.image,
                          name: item.name,
                          description: item.description,
                          type: item.type,
                          id: item.id
                        })}>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={{ bottom: 40, marginBottom: -30 }}><Image style={{ width: 100, height: 100 }} source={item.image} /></Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </Callout>
                  </Marker> :
                  <Marker
                    title={item.name}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude
                    }}
                    key={item.id}
                  >
                    <Image source={require('../../assets/images/food_marker.png')} style={{ height: 35, width: 35 }} />
                    <Callout
                      tooltip
                      onPress={() => navigation.navigate('PlantDetails',
                        {
                          image: item.image,
                          name: item.name,
                          description: item.description,
                          type: item.type,
                          id: item.id
                        })}>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={{ bottom: 40, marginBottom: -30 }}><Image style={{ width: 100, height: 100 }} source={item.image} /></Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </Callout>
                  </Marker>
              ))}
            </View>
          }
          {showMarkers === "Medicinal" &&
            <View>
              {PlantsLocation.map(item => (
                item.type == "Medicinal" ?
                  <Marker
                    title={item.name}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude
                    }}
                    key={item.id}
                  >
                    <Image source={require('../../assets/images/medicine_marker.png')} style={{ height: 35, width: 35 }} />
                    <Callout
                      tooltip
                      onPress={() => navigation.navigate('PlantDetails',
                        {
                          image: item.image,
                          name: item.name,
                          description: item.description,
                          type: item.type,
                          id: item.id
                        })}>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={{ bottom: 40, marginBottom: -30 }}><Image style={{ width: 100, height: 100 }} source={item.image} /></Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </Callout>
                  </Marker> : null
              ))}
            </View>
          }
          {showMarkers === "Food" &&
            <View>
              {PlantsLocation.map(item => (
                item.type == "Food" ?
                  <Marker
                    title={item.name}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude
                    }}
                    key={item.id}
                  >
                    <Image source={require('../../assets/images/food_marker.png')} style={{ height: 35, width: 35 }} />
                    <Callout
                      tooltip
                      onPress={() => navigation.navigate('PlantDetails',
                        {
                          image: item.image,
                          name: item.name,
                          description: item.description,
                          type: item.type,
                          id: item.id
                        })}>
                      <View style={styles.bubble}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={{ bottom: 40, marginBottom: -30 }}><Image style={{ width: 100, height: 100 }} source={item.image} /></Text>
                      </View>
                      <View style={styles.arrowBorder} />
                      <View style={styles.arrow} />
                    </Callout>
                  </Marker> : null
              ))}

            </View>
          }
        </MapView>
      </View>
    </SafeAreaView>
  );
}

export default PlantLibrary

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  filterContainer: {
    position: "absolute",
    zIndex: 1,
    bottom: 10,
    right: 10,
    width: '20%',
    height: "12%",
    borderColor: "Black",
    borderWidth: 1,
    backgroundColor: "white",
  },
  textStyle: {
    paddingLeft: 5,
  },
  bubble: {
    width: 150,
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 0.5,
    padding: 15,
    borderColor: "#ccc"
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  image: {
    widht: 120,
    height: 80,
  },
});

