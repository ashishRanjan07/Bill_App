import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../utils/AppColor'

const WrapperContainer = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
    <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />
      {children}
    </SafeAreaView>
  )
}

export default WrapperContainer

const styles = StyleSheet.create({})