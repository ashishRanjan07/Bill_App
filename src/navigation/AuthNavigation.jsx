import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Launcher from '../screen/auth/Launcher';
import Login from '../screen/auth/Login';
import InfoOne from '../screen/auth/InfoOne';
import Account from '../screen/auth/Account';
import LoginWithEmail from '../screen/auth/LoginWithEmail';
import ForgetPassword from '../screen/auth/ForgetPassword';
import LoginWithMobile from '../screen/auth/LoginWithMobile';
import VerificationSuccess from '../screen/auth/VerificationSuccess';
import Register from '../screen/auth/Register';
import RegisterVerification from '../screen/auth/RegisterVerification';
import InfoTwo from '../screen/auth/InfoTwo';
import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Launcher" component={Launcher} />
      <Stack.Screen name="InfoOne" component={InfoOne} />
      <Stack.Screen name="InfoTwo" component={InfoTwo} />
      <Stack.Screen name='Account' component={Account}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='LoginWithEmail' component={LoginWithEmail}/>
      <Stack.Screen name='LoginWithMobile' component={LoginWithMobile}/>
      <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
      <Stack.Screen name='VerificationSuccess' component={VerificationSuccess}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='RegisterVerification' component={RegisterVerification}/>
    </Stack.Navigator>
  );
};

export default AuthNavigation;