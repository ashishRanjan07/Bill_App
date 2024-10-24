import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/AppColor'
import DrawerHeader from '../../components/DrawerHeader'

const FAQ = () => {
  return (
    <View style={styles.main}>
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.background}
      />
     <DrawerHeader title={"FAQ"}/>
    </SafeAreaView>
  </View>
  )
}

export default FAQ

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})