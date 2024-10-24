import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import Notification from '../screen/app/Notification';
import Dashboard from '../screen/app/Dashboard';
import Profile from '../screen/app/Profile';
import Payment from '../screen/app/Payment';
import Subscription from '../screen/app/Subscription';
import ManageSubscription from '../screen/app/ManageSubscription';
import ManageDispute from '../screen/app/ManageDispute';
import Swap from '../screen/app/Swap';
import SwapHistory from '../screen/app/SwapHistory';
import FAQ from '../screen/app/FAQ';
import ViewDetails from '../screen/app/ViewDetails';
import PayOutStanding from '../screen/app/PayOutStanding';
import MySubscription from '../screen/app/Features/MySubscription';
import MySubscriptionDetails from '../screen/app/Features/MySubscriptionDetails';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="View Details" component={ViewDetails} />
      <Stack.Screen name="Pay Outstanding" component={PayOutStanding} />
      <Stack.Screen name="My Subscription" component={MySubscription} />
      <Stack.Screen name="My Subscription Details" component={MySubscriptionDetails} />
    

    </Stack.Navigator>
  );
};

export default AppNavigation;


