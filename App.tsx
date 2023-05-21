import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <StatusBar style="light" translucent />

      <Text className="text-5xl font-bold text-gray-50">Hello World!</Text>
    </View>
  )
}
