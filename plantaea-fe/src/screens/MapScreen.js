import React, { useEffect, useRef } from 'react';
import { View, Animated, Alert, SafeAreaView, ImageBackground } from 'react-native';
import Svg, { Path, Defs, Pattern, Image, Filter, FeGaussianBlur, FeSpecularLighting, FeComposite, SvgXml } from 'react-native-svg';

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

  return (
    <View className="flex-1 bg-grayish-green">
      <View className="flex-1">
        <ImageBackground
          source={require('../assets/map-backgrounds/main-bg-2.png')}
          className="flex-1 bg-repeat bg-cover"
        >
          <Animated.View
            // className={`items-center justify-center flex-1 transform translate-y-${animation}`}
            className="items-center justify-center flex-1"
            style={{ transform: [{ translateY: animation }] }}
          >
            <SvgComponent width="90%" height="90%" strokeWidth={2} stroke="darkgray" />
          </Animated.View>
        </ImageBackground>
      </View>



    </View>
  );
};

const handlePolygonPress = (shape) => {
  Alert.alert(`${shape} Clicked`);
};

const SvgComponent = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 567">
    <Defs>
      {/* <Filter id="distortion">
        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G" />
      </Filter> */}
      <Pattern id="benguetBg" patternUnits="userSpaceOnUse" width="500" height="200">
        <Image
          // https://www.pexels.com/photo/the-lion-s-head-in-baguio-city-12914725/
          href={require('../assets/map-backgrounds/benguet-bg.jpeg')}
          x="-20"
          y="-32"
          width="300"
          height="250"
        />
      </Pattern>
      <Pattern id="ifugaoBg" patternUnits="userSpaceOnUse" width="400" height="200">
        <Image
          // https://www.pexels.com/photo/aerial-photo-of-banaue-rice-terraces-3698534/
          href={require('../assets/map-backgrounds/ifugao-bg.jpeg')}
          x="0"
          y="-20"
          width="400"
          height="300"
        />
      </Pattern>
      <Pattern id="mountainprovinceBg" patternUnits="userSpaceOnUse" width="400" height="200">
        <Image
          // https://www.pexels.com/photo/the-hanging-coffins-at-sagada-mountain-province-in-the-philippines-14386264/
          href={require('../assets/map-backgrounds/mountainprovince-bg.jpeg')}
          x="0"
          y="0"
          width="400"
          height="300"
        />
      </Pattern>
      <Pattern id="abraBg" patternUnits="userSpaceOnUse" width="300" height="500">
        <Image
          // https://abra.gov.ph/tag/popular-landmark/
          href={require('../assets/map-backgrounds/abra-bg.jpg')}
          x="-30"
          y="0"
          width="300"
          height="400"
        />
      </Pattern>
      <Pattern id="apayaoBg" patternUnits="userSpaceOnUse" width="400" height="700">
        <Image
          // https://www.touristspotsphilippines.com/apayao-province-and-its-natural-tourist-attractions/
          href={require('../assets/map-backgrounds/apayao-bg.jpg')}
          x="-70"
          y="-40"
          width="400"
          height="350"
        />
      </Pattern>
      <Pattern id="kalingaBg" patternUnits="userSpaceOnUse" width="300" height="500">
        <Image
          // https://www.touristspotsphilippines.com/apayao-province-and-its-natural-tourist-attractions/
          href={require('../assets/map-backgrounds/kalinga-bg.jpg')}
          x="50"
          y="70"
          width="270"
          height="400"
        />
      </Pattern>
    </Defs>
    <Path d="M157.6 10.5c-1.5 1.9-5.3 5.2-8.4 7.4-6.6 4.4-14.1 12.2-14.4 14.8-.1 1-.2 4.9-.2 8.8-.1 3.8-.7 9.9-1.3 13.5-.7 3.6-1.5 12.6-1.7 20-.3 7.5-1.2 17.5-2 22.3-.9 4.7-1.8 13.4-2.1 19.2l-.6 10.5 6.3 7.2c3.5 3.9 8.7 9.7 11.6 12.8 2.8 3.1 5.2 6 5.2 6.3 0 1.2 9.9 9.9 14.6 12.8 3.1 2 4.4 3.5 4 4.5-.3.8.5 5.8 1.9 11.1 1.4 5.2 2.5 10.8 2.5 12.3s.8 3.7 1.8 4.7c1.9 2.2 11.7 4.8 24.3 6.4 4.4.5 10.3 1.4 13.1 1.9 2.8.6 7.4 1 10.3 1 4.6 0 5.9-.5 10.8-4.3 4.8-3.5 5.6-4.6 5.2-6.7-.3-1.4-.7-4.1-.9-6-.4-3.2-1.9-9-4.6-18.2-.6-2.1-1.5-4-2-4.3-.5-.3-1.4-2.2-2-4.3-.7-2-2.5-5.1-4-6.7l-2.7-3 .8-10.5c1-13.8 1.6-17.2 4.4-25 3.1-8.8 11-25.9 12.9-28.1.9-1 1.8-2.9 2-4.1.3-1.3 1.6-5.1 3.1-8.5 4.8-11.5 5-10.8-6.2-22-5.4-5.5-12.7-11.9-16.3-14.2-3.6-2.3-7.2-4.6-8-5.1-8.7-5.6-14.7-9.3-18.3-11.1-2.3-1.2-4.4-2.5-4.7-2.9-.3-.4-2.5-1.8-5-3s-4.7-2.6-5-2.9c-.3-.3-3.2-1.9-6.5-3.6-3.3-1.6-6.2-3.2-6.5-3.6-.7-1-5.7-2.9-7.4-2.9-.8 0-2.6 1.6-4 3.5z"
      fill="url(#apayaoBg)"
      onPress={() => handlePolygonPress("Apayao")} />
    <Path d="M112 143.4c-3.6 1.2-8.2 3-10.4 3.9-2.1.9-4.2 1.7-4.7 1.7s-2.7 1.1-4.9 2.5-4.6 2.5-5.4 2.5c-.8 0-1.6.4-1.8.9-.2.5-1.7 1.7-3.4 2.7-8.2 4.9-20.7 14-23 16.6-2.3 2.9-17.3 32.3-22.2 43.8-1.3 3-3.4 7.7-4.7 10.5-3.2 7-5.2 11.6-5.9 14.2-.9 2.8.6 3.2 13.4 3.6l9.5.2-.3 5.8c-.2 4.1-1.1 7.6-3.4 12-3 6.1-7.6 12.9-9 13.5-.5.2-.8 1-.8 1.8 0 .9.5 1.2 1.1.8.6-.3 2.5.8 4.2 2.4 2.2 2.2 6.4 4.2 13.8 6.6 5.9 1.9 11.7 3.7 13 4 2.1.4 6.3 1.9 22.8 8.1 1.8.6 3.6 1.7 4 2.3.3.5 3.1 1.9 6.1 3 3 1.1 6.9 2.5 8.6 3.2 2.8 1.2 3.4 1.1 5.8-.8 4.9-3.8 8.4-9 8.4-12.5 0-1.7.9-5.9 2.1-9.2 1.1-3.3 2.3-7.9 2.6-10.3.3-2.4 1.5-7.7 2.6-11.8 1.1-4.1 2.3-8.7 2.5-10.2.8-4.4 5.6-9.5 13-13.5 3.8-2.1 7.3-3.9 7.9-4 2.7-.5 10.7-8.8 11.1-11.4 2.8-18.6 2.8-17.9.9-25-2.5-9.5-6-16.5-12.7-25.8-3.2-4.4-7.7-10.8-9.9-14.2-4.1-6.3-13.5-15.7-17.6-17.6-1.3-.6-2.3-1.4-2.3-1.9 0-1.4-4.2-.8-11 1.6z"
      fill="url(#abraBg)"
      onPress={() => handlePolygonPress("Abra")} />
    <Path d="M238.6 211.5c-2.1 1.9-4.2 3.3-4.6 3-.4-.3-3 1.5-5.8 4-4.9 4.4-7.5 5.5-8.7 3.6-.3-.5-2.9-1.2-5.8-1.6-14.2-1.6-31.4-4.3-35.6-5.6-2.6-.9-3.5-.8-4.2.2-1 1.7-.1 12.3 1.3 16.1 2.4 6.4-1.9 10.9-18.2 18.9-7.6 3.7-10.3 5.6-11.1 7.6-.5 1.4-1.8 3.8-2.9 5.4-2.2 3-6.7 16-7.5 21.2-.2 1.8-.9 4.8-1.5 6.7-.5 1.9-1 4.9-1 6.6 0 1.7-.7 4.8-1.5 6.7l-1.5 3.6 4.3.5c2.3.3 9.6.5 16.2.4 12.7-.3 23.1 1.5 30.4 5.1 2 1 6.1 2.6 9.1 3.6s6.3 2.4 7.3 3.3c1.5 1.3 1.9 1.3 3.5 0 .9-.8 3.9-2.4 6.6-3.4 2.6-1 6.7-3.6 9-5.7 2.2-2 5.9-4.6 8.1-5.7 2.2-1.1 6.4-3.8 9.4-6 6.6-5 9.1-5.6 14.4-3.9 2.3.8 4.4 1.4 4.7 1.5.3 0 1.9.6 3.5 1.3 6 2.3 8.1 2.9 12.3 3.5 4 .6 4.2.5 4.2-1.8 0-2.8 1.4-6.4 4.5-11.6 3.9-6.4 6.5-15.4 7.5-25.5.5-5.5 1.2-11.2 1.5-12.6.5-2-.2-3.4-3.2-6.5-2.1-2.1-5.6-4.8-7.8-5.9-2.2-1.1-4.6-2.6-5.3-3.3-.7-.6-1.8-1.2-2.3-1.2-1.6 0-10.8-9-14.6-14.4-3.9-5.5-9.3-11.6-10.2-11.6-.4 0-2.3 1.6-4.5 3.5z"
      fill="url(#kalingaBg)"
      onPress={() => handlePolygonPress("Kalinga")} />
    <Path d="M238 308.5c-1.2 1.3-2.7 2.2-3.1 1.9-.5-.3-.9-.1-.9.3 0 .5-1.5 1.7-3.2 2.7-1.8 1.1-5.6 3.9-8.5 6.3-2.8 2.3-5.4 4.3-5.7 4.3-.4 0-2.3 1-4.4 2.3-6.3 4-11.7 4.9-26.3 4.4-13.2-.4-14.8-.6-21.2-2.6-11.5-3.8-23.8-7.1-26.2-7.1-1.6 0-4.3-.5-6.1-1.2-2.7-.9-3.5-.9-4.9.5-.9 1-2.1 1.7-2.6 1.7s-4.5 3.4-8.9 7.6c-7.3 7-7.9 7.8-7.6 11.2.2 2-.7 6.5-2 10.2-1.2 3.6-2.5 9-2.8 12-.3 3-1.2 8-2 11-.9 3-1.6 7-1.6 8.7 0 2.8.6 3.6 4 5.3 2.2 1.1 4 2.4 4 2.8 0 1.9 13.4 14.1 17 15.4 2.9 1.1 8.5-.9 9.8-3.5 2.1-4.2 4.2-9.9 4.2-11.6 0-.9 1.4-4.3 3-7.5 1.7-3.3 3.2-6.9 3.4-8 .8-4.1 1.8-5.4 4.3-5.9 1.4-.2 12-.2 23.7 0 16.9.5 22.7.2 29.1-1 4.4-.9 9.8-1.9 12-2.1 4-.5 12.4-2.4 20-4.6 4.1-1.2 10.9-3.9 18.3-7.1 2.3-1.1 5.5-1.9 7-1.8 2.9.1 10-1.5 10.9-2.5 1.5-1.4 2-12.8 1.3-25.1-.2-3.9-.1-8.2.2-9.8l.7-2.7h-6.2c-7.7-.1-16.6-2.1-21-4.9-4.3-2.7-4.9-2.6-7.7.4z"
      fill="url(#mountainprovinceBg)"
      onPress={() => handlePolygonPress("Mt. Province")} />
    <Path d="M271 364.1c-1.9 1-4.4 1.9-5.5 1.9-1.1 0-3 .7-4.2 1.5-3.3 2.3-25.2 7.3-35 8-4.8.4-11.7 1.3-15.3 2.1-3.6.8-11.4 2.1-17.5 2.9-6 .8-14.4 2-18.5 2.6-4.1.7-10.3 1.3-13.8 1.4-5.6.1-6.6.5-9.6 3.4-4.2 4.1-11.6 18.8-11.6 23.2 0 5.3-1 6-8.6 6.2-6.7.2-6.9.3-6.7 2.7 0 1.4 1.3 7 2.8 12.5 2.6 9.3 3.5 19.6 3.5 40.2 0 2 1.7 1.5 5.2-1.6 5.9-5.1 18.7-7.1 55.8-8.5 21.1-.9 27.6-2 31.5-5.7 1.7-1.5 4.2-3.2 5.6-3.8 1.6-.6 4.8-4.3 8.7-10.3 3.4-5.1 6.7-9.9 7.3-10.6.6-.8 1.7-3.6 2.4-6.4.8-2.7 1.5-5.1 1.7-5.2 1.8-1.1 10.7-2.9 16.3-3.3 3.9-.3 7.5-.9 8.1-1.4.7-.5 1.5-3 1.9-5.4.6-4.4 1.3-4.9 5.1-4.4 1.5.2 2-2.5 1.2-6.4-.5-2.3-1.4-6.1-1.9-8.5-.5-2.3-.9-7.7-1-12-.1-10.9-1.1-16.6-2.9-16.8-.8-.1-3.1.7-5 1.7z"
      fill="url(#ifugaoBg)"
      onPress={() => handlePolygonPress("Ifugao")} />
    <Path d="M82.5 396.5c-3.3 1.4-6.4 2.5-6.9 2.5s-2.8 1.2-5 2.6c-4.1 2.6-4.2 2.8-4 7.5.2 2.7-.9 9.6-2.2 15.2-1.4 5.6-2.8 13-3.1 16.5-.9 10.4-3.5 15.8-12.9 26.2-2.2 2.5-5.8 6.7-7.9 9.5-2.1 2.7-4.4 5.4-5 6-.6.5-2.3 2.7-3.7 4.9-2.4 3.4-2.6 4.8-2.6 13.1 0 7.9.3 10 2.3 13.7 2.3 4.3 5.5 17.3 5.5 22.2 0 1.4.5 2.8 1 3.1.6.3 1 1.5 1 2.5s1.1 3.1 2.4 4.7c2.9 3.4 14.2 9.3 17.9 9.3 1.4 0 4.6.6 6.9 1.4 5 1.7 7.7 2 17.1 1.8 6.6-.2 6.9-.3 11.2-4.6 4-4.1 9.5-13 9.5-15.6 0-1.1 1.7-5.2 6.8-16 1.4-3 2.6-5.7 2.7-6 .3-1.5 3.9-7.6 4.9-8.2.6-.4.8-.8.3-.8-.4 0 .4-1.7 1.7-3.7 2.2-3.4 2.5-4.9 2.5-13.5-.1-5.3-.7-12.3-1.4-15.5-1.9-7.8-3.5-21.4-3.5-29.4-.1-3.5-.5-8.4-1-10.9-.6-2.5-1.4-8.9-1.9-14.2l-.9-9.8-8.7-8.5c-8.1-8-8.8-8.5-12.8-8.5-2.3 0-6.9 1.2-10.2 2.5z"
      fill="url(#benguetBg)"
      onPress={() => handlePolygonPress("Benguet")} />
  </Svg>
)

export default MapScreen;