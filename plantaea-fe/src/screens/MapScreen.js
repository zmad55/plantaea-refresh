import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Callout, Polygon } from 'react-native-maps';
import { StyleSheet, Text, View, Image, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { DepartmentOfAgriculture } from '../data/carDOA';

import { plantListLibrary,MarketListLibrary } from '../data/plantData';
import { getLocation } from '../permissions/locationPermission'

const MapScreen = ({ navigation, route }) => {
  const minLatitude = 16.093;
  const maxLatitude = 18.677;
  const minLongitude = 120.355;
  const maxLongitude = 121.745;

  const mapWidth = maxLongitude - minLongitude;
  const mapHeight = maxLatitude - minLatitude;

  const [pan] = useState(new Animated.ValueXY());

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y },
        ],
        { useNativeDriver: false }
      ),
    })
  ).current;

  const handleZoom = (event) => {
    const { nativeEvent } = event;
    const newScale = nativeEvent.scale;

    // Apply scaling transformations
    pan.setValue({
      x: pan.x._value * newScale,
      y: pan.y._value * newScale,
    });
  };

  return (
    <View
      style={{ flex: 1 }}
      {...panResponder.panHandlers}
      onResponderTerminationRequest={() => false}
      onResponderGrant={() => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({ x: 0, y: 0 });
      }}
      onResponderRelease={() => {
        pan.flattenOffset();
      }}
    >
      <Animated.View
        style={{
          position: 'absolute',
          width: mapWidth,
          height: mapHeight,
          backgroundColor: 'white',
          transform: [
            { translateX: pan.x },
            { translateY: pan.y },
          ],
        }}
      >
        {/* Your map content goes here */}
      </Animated.View>
    </View>
  );
};


export default MapScreen;