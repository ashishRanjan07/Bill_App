import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../utils/AppColor';
import DrawerHeader from '../../components/DrawerHeader';

const Swap = () => {
  return (
    <SafeAreaView style={styles.main}>
    <StatusBar
      barStyle={'dark-content'}
      backgroundColor={Colors.background}
    />
    <DrawerHeader title={'Swap'} />
    <View style={styles.content}>
      {/* Your content goes here */}
    </View>
  </SafeAreaView>
  );
};

export default Swap;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    borderWidth: 2,
  },
});
