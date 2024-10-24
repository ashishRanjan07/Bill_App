import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../../utils/AppColor';
import SubscriptionCard from '../../../components/SubscriptionCard';
import InternalHeader from '../../../components/InternalHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MySubscriptionDetailsTab from './MySubscriptionDetailsTab';
import MySubscriptionInvoiceTab from './MySubscriptionInvoiceTab';
import { moderateScaleVertical } from '../../../utils/ResponsiveSize';

const Tab = createMaterialTopTabNavigator();

const MySubscriptionDetails = ({route}) => {
  const { item } = route.params;
  // console.log(item?.details, 'Line 6');
  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: Colors.background}} />
      <StatusBar
        backgroundColor={Colors.background}
        barStyle={'dark-content'}
      />
      <InternalHeader title={'My Subscription Details'} />
      <View style={{marginBottom:moderateScaleVertical(20)}}>
      <SubscriptionCard item={item} option={'details'} />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Details" component={MySubscriptionDetailsTab} initialParams={item.details} />
        <Tab.Screen name="Invoice" component={MySubscriptionInvoiceTab}  initialParams={item.invoice}/>
      </Tab.Navigator>
    </View>
  );
};

export default MySubscriptionDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
