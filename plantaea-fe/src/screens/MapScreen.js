import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Callout, Polygon } from 'react-native-maps';
import { StyleSheet, Text, View, Image, TouchableOpacity, PanResponder, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { DepartmentOfAgriculture } from '../data/carDOA';

import { plantListLibrary, MarketListLibrary } from '../data/plantData';
import { getLocation } from '../permissions/locationPermission'

const MapScreen = ({ navigation, route }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -1, // Move image up by 2 pixels
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0, // Move image back to its original position
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1, // Move image down by 2 pixels
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0, // Move image back to its original position
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animation]);

  return (
    <View className="flex-1 justify-center items-center">
      <View className="border-4 border-black relative w-full h-full">
        <Animated.View
          className="absolute w-34 h-34 items-center top-1/2"
          style={[
            { transform: [{ translateY: animation }] },
          ]}
        >
          <Image
            className="object-contain w-12 h-12"
            source={require('./Layer1.png')}
          />
        </Animated.View>
        <Animated.View
          className="absolute"
          style={[
            { transform: [{ translateY: animation }] },
          ]}
        >
          <Image
            className="w-full h-full"
            source={require('./Layer2.png')}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default MapScreen;