import React from 'react'
import { Home } from './src/Home'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
      <StatusBar style='auto'/>
    </SafeAreaView>   
  )
}