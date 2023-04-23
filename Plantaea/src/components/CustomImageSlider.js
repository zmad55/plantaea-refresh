import React from 'react';
import { Dimensions, View, Image, ScrollView, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.5;

const IMAGES = [
  { img_id: 1, image: require('../../assets/banners/plant-banner1.jpg') },
  { img_id: 2, image: require('../../assets/banners/plant-banner2.jpg') },
  { img_id: 3, image: require('../../assets/banners/plant-banner3.jpg') },
  { img_id: 4, image: require('../../assets/banners/plant-banner4.jpg') },
  { img_id: 5, image: require('../../assets/banners/plant-banner5.jpg') }
];

export default class CustomImageSlider extends React.Component {
  state = {
    active: 0,
    width: width * 0.8
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide })
    }
  }

  render() {
    return (
      <View className=''>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}>
          {
            IMAGES.map((item) => (
              < Image
                key={item.img_id}
                source={item.image}
                className="rounded-3xl scale-90"
                style={{ width, height }}
              />
            ))
          }
        </ScrollView>
        <View className='flex-row absolute bottom-0 self-center'>
          {
            IMAGES.map((item, k) => (
              <Text key={k} className={k === this.state.active ? 'text-white text-2xl m-1' : 'text-green-700 text-2xl m-1'}>•</Text>
            ))
          }
        </View>
      </View>
    );
  }
}
