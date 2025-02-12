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
import ScanCode from '../screen/app/swap/ScanCode';
import BuySubscription from '../screen/app/buySubscription/BuySubscription';
import BuySubscriptionDetails from '../screen/app/buySubscription/BuySubscriptionDetails';
import ChangeSubscription from '../screen/app/manageSubscription/ChangeSubscription';
import ViewBillDetails from '../screen/app/ViewBillDetails';
import PreBills from '../screen/app/PreBills';
import SolutionOrder from '../screen/app/solutionOrder/SolutionOrder';
import PaymentHistory from '../screen/app/PaymentHistory';
import ManageDisputeDetails from '../screen/app/ManageDisputeDetails';
import ViewEntitlementDetails from '../screen/app/entitlement/ViewEntitlementDetails';
import SolutionOrderDetails from '../screen/app/solutionOrder/SolutionOrderDetails';
import ChooseSubscription from '../screen/app/solutionOrder/ChooseSubscription';
import ReviewProductSubscription from '../screen/app/solutionOrder/ReviewProductSubscription';
import RaiseDispute from '../screen/app/RaiseDispute';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="View Details" component={ViewDetails} />
      <Stack.Screen name="Pay Outstanding" component={PayOutStanding} />
      <Stack.Screen name="My Subscription" component={MySubscription} />
      <Stack.Screen
        name="My Subscription Details"
        component={MySubscriptionDetails}
      />
      <Stack.Screen name="Scan Code" component={ScanCode} />
      <Stack.Screen name="Buy Subscription" component={BuySubscription} />
      <Stack.Screen name="Buy Subscription Details" component={BuySubscriptionDetails} />
      <Stack.Screen name="Change Subscription" component={ChangeSubscription} />
      <Stack.Screen name="View Bill Details" component={ViewBillDetails} />
      <Stack.Screen name="Pre Bills" component={PreBills} />
      <Stack.Screen name="Payment History" component={PaymentHistory} />
      <Stack.Screen name="Manage Dispute Details" component={ManageDisputeDetails} />
      <Stack.Screen name="View EntitlementDetails" component={ViewEntitlementDetails} />
      <Stack.Screen name="Solution Order Details" component={SolutionOrderDetails} />
      <Stack.Screen name="Choose Subscription" component={ChooseSubscription} />
      <Stack.Screen name="Subscription Details" component={ReviewProductSubscription} />
      <Stack.Screen name="Raise Dispute" component={RaiseDispute} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
