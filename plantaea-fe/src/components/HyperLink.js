import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HyperLink({optionalText, onPress, hyperLink}) {
  return (
    <View className="flex-row justify-center">
      <Text>{optionalText}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="font-bold text-green-900">{hyperLink}</Text>
      </TouchableOpacity>
    </View>
  )
}