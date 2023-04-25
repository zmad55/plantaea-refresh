import React, { useRef, useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, StyleSheet, StatusBar } from "react-native";
import { windowWidth, windowHeight } from '../utils/Dimensions'

import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSwitch from "../components/CustomSwitch";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = 70;
const MAX_HEIGHT = 350;

const PlantDetailsScreen = ({ navigation, route }) => {

  const navTitleView = useRef(null);

  const [descriptionTab, setDescriptionTab] = useState(1);
  const onSelectSwitch = (value) => {
    setDescriptionTab(value);
  }

  return (
    <View className="flex-1">
      <StatusBar barStyle='light-content' />
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.4}
        renderHeader={() => (
          <Image source={route.params?.image} className="w-screen h-100" />
        )}

        renderForeground={() => (
          <View className="flex-1 align-stretch justify-center items-center">
            <Text className="text-3xl font-bold text-white">{route.params?.localName}</Text>
            <Text className="italic text-white align-center">{route.params?.scientificName}</Text>
          </View>
        )}
        renderFixedForeground={() => (
          <View>
            <TouchableOpacity className="relative top-3 left-3 z-590 w-12 h-12 rounded-full bg-white items-center justify-center"
              onPress={() => navigation.navigate('Plant Library')}>
              <MaterialCommunityIcons name="arrow-left-bold-circle" size={40} color="green" />
            </TouchableOpacity>
            <Animatable.View className="h-1/4 justify-center items-center pt-40 opacity-0" ref={navTitleView}>
              <Text className="text-white text-base bg-transparent">{route.params?.localName}</Text>
            </Animatable.View>
          </View>
        )}

      >
        <SafeAreaView className="p-2.5 bg-white mb-2.5">
          <TriggeringView
            onHide={() => navTitleView.current.fadeInUp(200)}
            onDisplay={() => navTitleView.current.fadeOut(100)}
          >
          </TriggeringView>
          <Text className="text-3xl p-3 pb-2 border-b-2 border-b-slate-300 bg-white">Description</Text>
          <Text className="p-3 pb-2 border-b-2 border-b-slate-300 bg-white">{route.params?.description}</Text>
          <Text className="text-3xl p-3 pb-2 border-b-2 border-b-slate-300 bg-white">Use</Text>
          <Text className="p-3 pb-2 border-b-2 border-b-slate-300 bg-white">{route.params?.use}</Text>
          <Text className="text-3xl p-3 pb-2 border-b-2 border-b-slate-300 bg-white">Taxonomy</Text>

          <Text className="text-xs p-3 pb-2 border-b-2 border-b-slate-300 bg-white">{route.params?.taxonomy}</Text>
        </SafeAreaView>
      </ImageHeaderScrollView>
    </View>

    // <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
    //     <View>
    //         <ImageBackground source={route.params?.image} style={{width:windowWidth ,height:400}} imageStyle={{borderRadius:0}}>
    //             <View style={{backgroundColor:'white',width:44,height:44,borderRadius:44/2,marginTop:40,marginLeft:20,alignItems:'center',justifyContent:'center', shadowColor:'#171717', shadowOffset:{width: 100, height: 100}, shadowOpacity: 1,shadowRadius: 3}}>
    //                 <TouchableOpacity onPress={()=>navigation.goBack()}>
    //                     <Feather name="chevron-left" color="#1C4C4E" size={30}/>
    //                 </TouchableOpacity>
    //             </View>
    //         </ImageBackground>
    //     </View>

    // <ScrollView style={{padding:20}}>

    // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    // <Text style={{fontWeight:'bold', fontSize:30, color:'#1C4C4E', textAlign:'center'}}>{route.params?.localName}</Text>
    // <Text style={{fontStyle:'italic', marginBottom:20}}>{route.params?.scientificName}</Text>

    // <View>
    //     <CustomSwitch 
    //         selectionMode={1}
    //         option1="Description"
    //         option2="Uses"
    //         option3="Taxonomy"
    //         onSelectSwitch={onSelectSwitch}
    //     />
    // </View>

    // <View style={{backgroundColor:'red'}}>
    // {descriptionTab == 1 && <Text style={{textAlign:'justify', marginBottom:100}}>{route.params?.description}</Text>}
    // {descriptionTab == 2 && <Text style={{textAlign:'justify', marginBottom:100}}>{route.params?.use}</Text>}
    // {descriptionTab == 3 && <Text style={{textAlign:'justify', marginBottom:100, fontSize:10}}>{route.params?.taxonomy}</Text>}
    // </View>


    // </View>
    // </ScrollView>
    // </SafeAreaView>
  )
}

export default PlantDetailsScreen