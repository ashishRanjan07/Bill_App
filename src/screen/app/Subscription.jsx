import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/AppColor'
import DrawerHeader from '../../components/DrawerHeader'
import WrapperContainer from '../../components/WrapperContainer'

const Subscription = () => {
  return (
    <WrapperContainer>
      <DrawerHeader title={"Subscription"}/>
      <View style={{flex:1}}>

      </View>
    </WrapperContainer>
  
  )
}

export default Subscription

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})