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

const MapScreen = ({ navigation, route, props }) => {
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
    <SvgComponent width="100%" height="100%" strokeWidth={1} stroke="black" />
  );
};

const SvgComponent = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 169">
    <Path d="m147.4 7.8-4 3.7-1.3 13.9-1.2 13.8 4.7 5.5c2.6 3 5.3 5.7 6 6 .7.3 1.6 2.4 2 4.9.3 2.4 1.2 4.8 1.9 5.4.8.6 4.8 1.2 9 1.3 10.1.3 10.9-.7 7.7-9.7-3-8.7-2.8-11.4 1.3-20.7 1.9-4.4 3.5-8.6 3.5-9.3 0-2.7-10.8-10.9-21.6-16.4l-4.1-2.1-3.9 3.7zm16.4 4.6c5.1 3.2 10 6.9 10.9 8.2 1.5 2.4 1.4 2.8-2 10.2-4.2 9.1-5.5 16.3-3.3 18.1 1.8 1.5 4 10.6 3 12.2-.8 1.4-14 .5-15.9-1.1-.7-.6-1.5-2.6-1.8-4.5-.4-2.1-1.9-4.8-3.9-6.8-1.8-1.8-4.6-4.7-6.1-6.5-2.8-3.3-2.8-3.3-1.7-11.1.6-4.3 1.1-10.4 1.2-13.5.1-5.3.4-6 3.7-8.7 2-1.6 4.3-2.8 5.1-2.6.8.2 5.7 3 10.8 6.1zM133 45.6c-9.4 4.4-11.9 6.9-16.6 17-2.4 5.2-4.4 9.8-4.4 10.4 0 .5 1.3 1 2.9 1 4 0 4.4 1 2.1 5.5-2.4 4.7-1.6 5.9 4.9 7.9 2.6.7 7.1 2.4 10 3.6 5.1 2.3 5.3 2.3 7.1.4 1-1 2.5-5.1 3.4-8.9 1.1-5.1 2.1-7.4 3.8-8.5 5.6-3.7 6.9-5.5 7-9.5.1-2.2-.6-5.7-1.6-7.8-2.2-4.4-10.2-13.7-11.9-13.7-.7 0-3.7 1.2-6.7 2.6zm14.8 7.3c3.1 4.7 4.2 7.2 4.2 10.1 0 5.5-.8 6.8-5.1 9-3.6 1.9-3.8 2.4-5.4 9.7-2.4 10.8-3 11.2-10.2 8.1-3.2-1.4-7.5-3.1-9.5-3.8-4.9-1.5-5.3-2.4-3.3-6.6 2.1-4.5 1.4-6.2-2.5-6.6l-3.1-.3 4.7-9.6c4-8.3 5.2-10 9.5-12.8 2.8-1.8 6.7-3.8 8.7-4.6 4.8-1.7 6.4-.7 12 7.4z" />
    <Path d="M172.3 64.2c-1.3.6-2.3 1.4-2.3 1.8 0 .4-3.4.2-7.5-.5l-7.5-1.1v3.8c0 3.4-.4 4-4.1 5.8-4.3 2.3-6.3 5.7-7.8 13.4l-.8 4.3 5.8.6c3.2.3 7.9 1.3 10.4 2.3l4.6 1.7 5.7-3.9c5.7-3.9 5.8-4 10.1-2.7 2.5.7 4.5 1.2 4.5 1 .1-.1.9-1.7 1.9-3.4 1-1.8 2-5.4 2.3-8l.6-4.8-6.6-5.8c-3.5-3.1-6.6-5.7-6.8-5.6-.2 0-1.3.5-2.5 1.1zm5.3 2.7c1.4 1.7 4.1 4 6.1 5.2 3.4 2.1 3.5 2.4 2.9 6.6-.7 5.3-3.2 10.3-5.1 10.3-.7 0-2.6-.5-4-1-2.3-.9-3.4-.5-8.4 3l-5.7 4-5.7-2c-3.1-1.1-7.5-2-9.8-2-4.2 0-4.2 0-3.6-3.3 1.1-6.6 3.4-10.5 7.6-12.7 3.6-1.8 4.1-2.5 4.1-5.5 0-3.9.7-4.1 9-2.6 3.7.8 4.8.6 6.8-1 3.1-2.4 2.9-2.4 5.8 1z" />
    <Path d="M168.6 94.5c-5.5 4-10 4.5-18.2 2-6.6-2-8.4-1.9-11.6.8-1.9 1.6-3 4-4.2 9.2l-1.6 7 4 3.7c2.1 2.1 4.4 3.8 5 3.8.6 0 2.1-2.4 3.5-5.4l2.4-5.3 10.3-.5c7.2-.4 12.6-1.3 17.8-3l7.5-2.5.3-5.5.3-5.5-3.3-.6c-1.8-.4-4.2-.8-5.3-1.1-1.3-.3-3.8.7-6.9 2.9zm11.7-.8c2.6.5 2.8.8 2.5 5l-.3 4.5-7 2.4c-5 1.8-10.1 2.7-17.6 3.1l-10.7.6-2.3 4.8c-1.2 2.7-2.8 4.9-3.4 4.9-1.6 0-6.5-4.9-6.5-6.5 0-.6.5-3.7 1.1-6.9 1.3-6.3 4.8-10.1 8.4-9.3 17.1 4.1 20 3.9 25.8-1.4 2.2-2 3.8-2.7 5.2-2.3 1.1.3 3.3.8 4.8 1.1z" />
    <Path d="M180.3 108.5c-3.2 1.3-12.1 2.9-25 4.4-6.7.8-8.7 2.2-9.8 7.3-.5 2.2-1.2 2.8-3.2 2.8s-2.4.4-1.8 1.7c.4 1 1 4.9 1.2 8.6.5 5.8.8 6.7 2.2 6.1 3.2-1.3 9.8-2.3 16.1-2.4 8.2 0 10.5-1.2 14.9-7.8 2.8-4.1 4.1-5.2 6.2-5.2 4.2 0 6-3.6 5.1-10.6-.4-3.2-1.1-5.9-1.7-6-.5-.2-2.5.3-4.2 1.1zm4.7 5.8c.3 2.6.3 4.7-.1 4.7s-.9.9-1.2 2c-.4 1.5-1.4 2-3.6 2-2.5 0-3.4.6-5 3.7-3.8 7.6-5.9 8.6-18.1 9.3-6.1.4-11.6 1.2-12.4 1.9-1.2 1-1.4.5-1.4-3.6-.1-2.7-.5-6.1-1.1-7.6-1-2.5-.8-2.7 1.3-2.7 1.8 0 2.5-.7 2.9-2.8 1-4.9 2.8-6.3 9.7-7.2 15.7-2.1 22.6-3.2 24-4.1 3-1.8 4.5-.5 5 4.4zM127.4 117.4c-2.9 1.3-3.3 2-4.5 8.6-1 5.9-2 8.2-5.6 12.8-4.7 6.1-5 7.5-2.8 15.9 1.7 6.8 3.9 8.9 9.9 9.8 7 1.1 8.1.3 12.6-9.3l4.1-8.7-1.2-12c-1.1-11.3-1.4-12.2-4.2-15.3-3.5-3.6-3.9-3.7-8.3-1.8zm7 1.8c2.2 2 2.7 3.8 4.1 14.4l1.6 12-4.3 9-4.3 8.9-4.1-.1c-7.2-.1-10.1-2-11.4-7.2-2.6-10.6-2.6-10.8 2.3-16.8 4-4.7 4.8-6.5 5.8-12.8 1.1-6.4 1.6-7.5 3.8-8.4 3.7-1.4 3.7-1.4 6.5 1z" />
  </Svg>
)

export default MapScreen;