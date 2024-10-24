import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../utils/ResponsiveSize';
import FontFamily from '../../utils/FontFamily';
import Colors from '../../utils/AppColor';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {validateEmail} from '../../utils/CommonFunction';
import {showMessage} from 'react-native-flash-message';
import BottomModal from '../../components/BottomModal';
import {useDispatch} from 'react-redux';
import {login, saveData} from '../../redux/action/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginWithEmail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('aviashishranjan@gmail.com');
  const [password, setPassword] = useState('password');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email.length > 0) {
      setEmailError(null);
    }
    if (password.length > 6) {
      setPasswordError(null);
    }
  }, [email, password]);

  const handleSignIn = async () => {
    if (!email || !password) {
      setEmailError('Please enter the email id');
      setPasswordError('Please enter the password');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter the valid email id');
      return;
    }
    if (password.length < 6) {
      setPasswordError('Password should be minimum of 6 character');
      return;
    }
    try {
      setLoading(true);
      const user ={
        email:email,
        password:password
      }
      if (email === 'aviashishranjan@gmail.com' && password === 'password') {
       await AsyncStorage.setItem('isLoggedIn', 'Yes');
        await AsyncStorage.setItem('user', JSON.stringify(user));
        dispatch(login('Yes'));
        dispatch(saveData('Yes'));
      } else {
        showMessage({
          message: 'Invalid Credentials',
          type: 'danger',
        });
      }
    } catch (error) {
      showMessage({
        message: 'Error, Something Went Wrong, Please try again',
        type: 'warning',
      });
    } finally {
      setLoading(false);
      setEmail('');
      setPassword('');
      setEmailError(null);
      setPasswordError(null);
    }
  };
  return (
    <ImageBackground source={ImagePath.background} style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <ScrollView style={styles.scrollViewHolder}>
        <View style={styles.logoHolder}>
          <Image
            source={ImagePath.logo}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        </View>
        <View style={styles.accounttextHolder}>
          <Text style={styles.text}>Login to your Account</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Email ID"
            placeholderTextColor={Colors.white}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            style={styles.inputBox}
          />
        </View>
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        <View
          style={[styles.textInput, {marginTop: moderateScaleVertical(43.5)}]}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.white}
            value={password}
            onChangeText={text => setPassword(text)}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.inputBox}
          />
        </View>
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        <TouchableOpacity
          style={styles.dAccountHolder}
          onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[styles.text, {color: Colors.statusBarColor}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonHolder}>
          <CustomButton name={'Sign in'} handleAction={handleSignIn} />
        </View>
      </ScrollView>
      <BottomModal
        visible={loading}
        hideModal={() => setLoading(false)}
        message={' Please Wait \n we are validating your credential'}
      />
    </ImageBackground>
  );
};

export default LoginWithEmail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputBox: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
    padding: moderateScale(10),
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderColor,
  },
  buttonHolder: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: moderateScaleVertical(105),
  },
  scrollViewHolder: {
    flex: 1,
  },
  logoHolder: {
    marginTop: moderateScaleVertical(109),
    alignItems: 'center',
  },
  imageStyle: {
    width: moderateScale(180),
    height: moderateScale(62),
  },
  accounttextHolder: {
    marginTop: moderateScale(67),
    alignItems: 'center',
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
  },
  textInput: {
    marginTop: moderateScaleVertical(119),
    width: '85%',
    alignSelf: 'center',
  },
  dAccountHolder: {
    width: '90%',
    marginTop: moderateScaleVertical(10),
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: moderateScale(18.5),
  },
  errorText: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.red,
    textAlign: 'center',
    marginVertical: moderateScaleVertical(10),
  },
});
