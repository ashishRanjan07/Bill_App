import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/AppColor'
import DrawerHeader from '../../components/DrawerHeader'

const ManageSubscription = () => {
  return (
    <View style={styles.main}>
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.background}
      />
     <DrawerHeader title={"Manage Subscription"}/>
    </SafeAreaView>
  </View>
  )
}

export default ManageSubscription

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})