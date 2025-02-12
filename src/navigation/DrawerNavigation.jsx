import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screen/app/Dashboard';
import Colors from '../utils/AppColor';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../utils/ResponsiveSize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontFamily from '../utils/FontFamily';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ImagePath} from '../utils/ImagePath';
import Profile from '../screen/app/Profile';
import Payment from '../screen/app/Payment';
import Subscription from '../screen/app/Subscription';
import ManageSubscription from '../screen/app/ManageSubscription';
import ManageDispute from '../screen/app/ManageDispute';
import Swap from '../screen/app/Swap';
import SwapHistory from '../screen/app/SwapHistory';
import FAQ from '../screen/app/FAQ';
import BottomLogoutModal from '../components/BottomLogoutModal';
import {useDispatch} from 'react-redux';
import {login, saveData} from '../redux/action/Action';
import SolutionOrder from '../screen/app/solutionOrder/SolutionOrder';
import AboutUs from '../screen/app/AboutUs';
import TermsOfUse from '../screen/app/TermsOfUse';
import Entitlement from '../screen/app/entitlement/Entitlement';

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [showLogoutModal, setLogoutModal] = useState(false);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchLocalData();
  }, [isFocused]);

  const fetchLocalData = async () => {
    const response = await AsyncStorage.getItem('user');
    const data = JSON.parse(response);
    setUserData(data);
  };

  const handleLogout =  async() => {
    // console.log('clicked on the logout button');
     await AsyncStorage.removeItem('isLoggedIn'),
     await AsyncStorage.removeItem('user'),
      dispatch(login('No'));
    dispatch(saveData('null'));
    setLogoutModal(false);
  };
  return (
    <View style={styles.main}>
      <SafeAreaView style={{backgroundColor: Colors.statusBarColor}} />
      <View style={styles.imageHolder}>
        <Image
          source={ImagePath.user}
          resizeMode="contain"
          style={styles.iconHolder}
        />
        <Text style={styles.userNameText}>{userData?.email}</Text>
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" color={Colors.black} size={textScale(20)} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Profile')}>
          <Feather name="user" color={Colors.black} size={textScale(20)} />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Payment')}>
          <Feather
            name="credit-card"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Subscription')}>
          <MaterialIcons
            name="subscriptions"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Entitlement')}>
          <MaterialIcons
            name="subscriptions"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>View Entitlement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Solution Order')}>
          <MaterialIcons
            name="subscriptions"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>Solution Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Manage Subscription')}>
          <MaterialIcons
            name="manage-history"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>Manage Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Manage Dispute')}>
          <Ionicons
            name="hammer-outline"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>Mange Dispute</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Swap')}>
          <AntDesign name="swap" color={Colors.black} size={textScale(20)} />
          <Text style={styles.text}>Swap</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Swap History')}>
          <Octicons name="history" color={Colors.black} size={textScale(20)} />
          <Text style={styles.text}>Swap History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('FAQ')}>
          <AntDesign
            name="question"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>FAQ</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('About Us')}>
          <MaterialIcons
            name="info-outline"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => navigation.navigate('Terms of Use')}>
          <MaterialIcons
            name="policy"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>Terms of Use</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.itemHolder}
          onPress={() => setLogoutModal(true)}>
          <MaterialIcons
            name="logout"
            color={Colors.black}
            size={textScale(20)}
          />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
        <BottomLogoutModal
          visible={showLogoutModal}
          hideModal={() => setLogoutModal(false)}
          handleLogout={handleLogout}
        />
      </ScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Subscription" component={Subscription} />
      <Drawer.Screen
        name="Manage Subscription"
        component={ManageSubscription}
      />
      <Drawer.Screen name="Manage Dispute" component={ManageDispute} />
      <Drawer.Screen name="Swap" component={Swap} />
      <Drawer.Screen name="Swap History" component={SwapHistory} />
      <Drawer.Screen name="FAQ" component={FAQ} />
      <Drawer.Screen name="Solution Order" component={SolutionOrder} />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Terms of Use" component={TermsOfUse} />
      <Drawer.Screen name="Entitlement" component={Entitlement} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.black,
  },
  itemHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
    padding: textScale(10),
    paddingHorizontal: moderateScale(20),
  },
  userNameText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.white,
    fontSize: textScale(16),
    width: '100%',
  },
  imageHolder: {
    height: moderateScale(185),
    backgroundColor: Colors.statusBarColor,
    justifyContent: 'flex-end',
    paddingBottom: moderateScaleVertical(10),
    gap: moderateScale(10),
    paddingLeft: moderateScale(10),
    marginBottom: moderateScaleVertical(20),
  },
  iconHolder: {
    width: moderateScale(80),
    height: moderateScale(80),
  },
  divider: {
    borderWidth: 1,
    backgroundColor: Colors.borderColor2,
    borderColor: Colors.borderColor2,
  },
});
