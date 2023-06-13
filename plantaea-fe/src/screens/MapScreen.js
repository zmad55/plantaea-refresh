import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Polygon, Image, Path } from 'react-native-svg';
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

  const handlePolygonPress = (shape) => {
    Alert.alert(`${shape} Clicked`);
  };

  return (
    <Animated.View className="items-center justify-center flex-1 w-full h-screen border-2 border-emerald-100">
        <Svg className="absolute w-full h-full">
          <Path
            d="M50 0 L100 100 L0 100 Z"
            fill="blue"
            onPress={() => handlePolygonPress('Star')}
          />
        </Svg>

      {/* <Polygon
          points="150,30 200,150 280,150 215,220 250,340 150,270 50,340 85,220 20,150 100,150"
          fill="#FF0000"
          onPress={() => handleShapePress('Star')}
        /> */}


    </Animated.View>
  );
};

export default MapScreen;