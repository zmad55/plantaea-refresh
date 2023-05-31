import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { DepartmentOfAgriculture } from '../data/carDOA';

import { plantListLibrary,MarketListLibrary } from '../data/plantData';
import { getLocation } from '../permissions/locationPermission'

const MapScreen = ({ navigation, route }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getUserLocation = async () => {
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
    getUserLocation();
  }, []);

  function listDownType(plantListLibrary) {
    const uniqueType = ["Medicinal"]
    for (let i = 0; i < plantListLibrary.length; i++) {
      uniqueType.push(plantListLibrary[i].type)
    }
    const uniqueArray = [...new Set(uniqueType)]
    return uniqueArray
  }
  const lastArray = listDownType(plantListLibrary)

  function filterType(plantListLibrary, userInput) {
    const plantType = []
    for (let i = 0; i < plantListLibrary.length; i++) {
      if (plantListLibrary[i].type == userInput)
        plantType.push(plantListLibrary[i])
    }
    return plantType
  }

  const options = [
    { label: 'All', value: 'All', materialIcon_name: '../../assets/images/plant_marker.png', img: require('../../assets/images/plant_marker.png'), color: '#2196F3' },
    { label: 'Medicine', value: 'Medicine', materialIcon_name: '../../assets/images/medicine_marker.png', img: require('../../assets/images/medicine_marker.png'), color: '#4CAF50' },
    { label: 'Consumable', value: 'Consumable', materialIcon_name: '../../assets/images/food_marker.png', img: require('../../assets/images/food_marker.png'), color: '#FFC107' },
    { label: 'Ornamental', value: 'Ornamental', materialIcon_name: '../../assets/images/home_marker.png', img: require('../../assets/images/home_marker.png'), color: '#FFA000' },
    { label: 'Office', value: 'Office', materialIcon_name: '../../assets/images/bldg_marker.png', img: require('../../assets/images/bldg_marker.png'), color: '#B02001' },
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

  const mapRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    console.log('markerId:', route.params?.markerId);
    const markerId = route.params?.markerId
    if (markerId) {
      const marker = plantListLibrary.find(m => m.id === markerId);
      if (marker) {
        setSelectedMarker(marker);
        mapRef.current?.animateToRegion(marker.coordinate);
      }
    }
  }, [navigation]);

  return (
    <SafeAreaView>
      <View>
        <View className="absolute top-3 right-3 z-50">
          <TouchableOpacity className="w-12 h-12 rounded-full bg-white items-center justify-center" onPress={handlePress}>
            <MaterialCommunityIcons name={isExpanded ? "close" : "filter"} size={35} color="green" />
          </TouchableOpacity>
          {isExpanded && (
            <View className="bg-white rounded-2xl px-2 py-4 mt-3">
              <RadioButton.Group onValueChange={typeSelect} value={showMarkers}>
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    className="flex-col items-center py-3"
                    onPress={() => typeSelect(option.value)}
                  >
                    <Image source={option.img}
                      className={`w-7 h-7 rounded-full flex items-center justify-center border-2 
                      ${showMarkers === option.label ?
                          'brightness-50' : 'opacity-30'
                        }`} />
                  </TouchableOpacity>
                ))}
              </RadioButton.Group>
            </View>
          )}
        </View>
        <MapView
          className="w-screen h-screen"
          initialRegion={{
            latitude: 17.3513,
            longitude: 121.1719,
            latitudeDelta: 0,
            longitudeDelta: 1.9
          }}
        >
          <Marker coordinate={mapRegion} title='You are here!' />
          {plantListLibrary.filter(item => {
            if (showMarkers === "All") return true;
            if (showMarkers === "Medicine" && item.category[0] === "medicine") return true;
            if (showMarkers === "Consumable" && (item.category[0] === "consumable" || item.category[1] === "consumable")) return true;
            if (showMarkers === "Ornamental" && (item.category[0] === "ornamental" || item.category[1] === "ornamental" || item.category[2] === "ornamental")) return true;
            return false;
          }).map(item => (
            <Marker
              title={item.localName}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude
              }}
              key={item.id}
            >
              {showMarkers === "All" && <Image source={require('../../assets/images/plant_marker.png')} className="h-10 w-10" />}
              {showMarkers === "Medicine" && <Image source={require('../../assets/images/medicine_marker.png')} className="h-10 w-10" />}
              {showMarkers === "Consumable" && <Image source={require('../../assets/images/food_marker.png')} className="h-10 w-10" />}
              {showMarkers === "Ornamental" && <Image source={require('../../assets/images/home_marker.png')} className="h-10 w-10" />}
              <Callout
                tooltip
                onPress={() => navigation.navigate('PlantDetails',
                  {
                    image: item.image,
                    scientificName: item.scientificName,
                    localName: item.localName,
                    description: item.description,
                    use: item.use,
                    taxonomy: item.taxonomy,
                    category: item.category,
                    id: item.id
                  })}>
                <View className="w-32 flex-col items-center p-2 bg-white rounded-lg">
                  <Text className="font-2 font-semibold">{item.localName}</Text>
                  <Text><Image className="w-28 h-28 rounded-lg" source={item.image} /></Text>
                </View>
                <View className="bg-transparent border-transparent border-t-white border-8 self-center mb-4" />
              </Callout>
            </Marker>
          ))}
          {DepartmentOfAgriculture.map(item =>
                <Marker
                  title={item.departmentName}
                  coordinate = {{latitude: item.latitude,
                                 longitude: item.longitude}}
                  key={item.id}
                >
                  <Image source = {require('../../assets/images/bldg_marker.png')} className="w-28 h-28 rounded-lg" />
                  <Callout tooltip>
                    <View className="w-32 flex-col items-center p-2 bg-white rounded-lg">
                      <Text>{item.departmentName}</Text>
                    </View>
                  </Callout>
                </Marker>)
            }
          
        </MapView>
        {/* <MapView
          className="w-screen h-screen"
          initialRegion={{
            latitude: 17.3513,
            longitude: 121.1719,
            latitudeDelta: 0,
            longitudeDelta: 1.9
          }}
        >
          <Marker coordinate={mapRegion} title='You are here!' />
          {showMarkers === "All" &&
            <View>
              {plantListLibrary.map(item => (
                <Marker
                  title={item.localName}
                  coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude
                  }}
                  key={item.id}
                >
                  <Image source={require('../../assets/images/plant_marker.png')} className="h-10 w-10" />
                  <Callout
                    tooltip
                    onPress={() => navigation.navigate('PlantDetails',
                      {
                        image: item.image,
                        scientificName: item.scientificName,
                        localName: item.localName,
                        description: item.description,
                        use: item.use,
                        taxonomy: item.taxonomy,
                        category: item.category,
                        id: item.id
                      })}>
                    <View className="w-32 flex-col items-center p-2 bg-white rounded-lg">
                      <Text className="font-2 font-semibold">{item.localName}</Text>
                      <Text><Image className="w-28 h-28 rounded-lg" source={item.image} /></Text>
                    </View>
                    <View className="bg-transparent border-transparent border-t-white border-8 self-center mb-4" />
                  </Callout>
                </Marker>
              ))}
            </View>
          }
          {showMarkers === "Medicine" &&
            <View>
              {plantListLibrary.map(item => (
                item.category[0] == 'medicine' ?
                  <Marker
                    title={item.localName}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude
                    }}
                    key={item.id}
                  >
                    <Image source={require('../../assets/images/medicine_marker.png')} className="h-10 w-10" />
                    <Callout
                      tooltip
                      onPress={() => navigation.navigate('PlantDetails',
                        {
                          image: item.image,
                          scientificName: item.scientificName,
                          localName: item.localName,
                          description: item.description,
                          use: item.use,
                          taxonomy: item.taxonomy,
                          category: item.category,
                          id: item.id
                        })}>
                      <View className="w-32 flex-col items-center p-2 bg-white rounded-lg">
                        <Text className="font-2 font-semibold">{item.localName}</Text>
                        <Text><Image className="w-28 h-28 rounded-lg" source={item.image} /></Text>
                      </View>
                      <View className="bg-transparent border-transparent border-t-white border-8 self-center mb-4" />
                    </Callout>
                  </Marker> : null
              ))}
            </View>
          }
          {showMarkers === "Consumable" &&
            <View>
              {plantListLibrary.map(item => (
                item.category[0] == 'consumable' || item.category[1] == 'consumable' ?
                  <Marker
                    title={item.localName}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude
                    }}
                    key={item.id}
                  >
                    <Image source={require('../../assets/images/food_marker.png')} className="h-10 w-10" />
                    <Callout
                      tooltip
                      onPress={() => navigation.navigate('PlantDetails',
                        {
                          image: item.image,
                          scientificName: item.scientificName,
                          localName: item.localName,
                          description: item.description,
                          use: item.use,
                          taxonomy: item.taxonomy,
                          category: item.category,
                          id: item.id
                        })}>
                      <View className="w-32 flex-col items-center p-2 bg-white rounded-lg">
                        <Text className="font-2 font-semibold">{item.localName}</Text>
                        <Text><Image className="w-28 h-28 rounded-lg" source={item.image} /></Text>
                      </View>
                      <View className="bg-transparent border-transparent border-t-white border-8 self-center mb-4" />
                    </Callout>
                  </Marker> : null
              ))}
            </View>
          }
          {showMarkers === "Ornamental" &&
            <View>
              {plantListLibrary.map(item => (
                item.category[0] == 'ornamental' || item.category[1] == 'ornamental' || item.category[2] == 'ornamental' ?
                  <Marker
                    title={item.localName}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude
                    }}
                    key={item.id}
                  >
                    <Image source={require('../../assets/images/home_marker.png')} className="h-10 w-10" />
                    <Callout
                      tooltip
                      onPress={() => navigation.navigate('PlantDetails',
                        {
                          image: item.image,
                          scientificName: item.scientificName,
                          localName: item.localName,
                          description: item.description,
                          use: item.use,
                          taxonomy: item.taxonomy,
                          category: item.category,
                          id: item.id
                        })}>
                      <View className="w-32 flex-col items-center p-2 bg-white rounded-lg">
                        <Text className="font-2 font-semibold">{item.localName}</Text>
                        <Text><Image className="w-28 h-28 rounded-lg" source={item.image} /></Text>
                      </View>
                      <View className="bg-transparent border-transparent border-t-white border-8 self-center mb-4" />
                    </Callout>
                  </Marker> : null
              ))}
            </View>
          }
        </MapView> */}
      </View>
    </SafeAreaView>
  );
}

export default MapScreen;