import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import { activities } from '@data/dailyActivities'
import ListActivity from "@components/dailiesScreen/ListActivity";

export default function DailiesScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView className="mt-10">
        <View className="items-center flex-1">
          <Image
            source={require('../assets/images/gamepad.png')}
            resizeMode="contain"
            className="w-20 h-20"
          />
          <Text className="text-2xl font-bold text-green-700">DAILIES</Text>
        </View>
        <View className="p-2 mt-5 border-t-2 border-t-slate-200" />
        {activities.map(e => (
          <ListActivity key={e.id} title={e.title} total={e.total} />
        ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}