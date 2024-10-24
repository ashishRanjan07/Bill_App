import {
  Alert,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ImagePath} from '../../utils/ImagePath';
import FontFamily from '../../utils/FontFamily';
import Colors from '../../utils/AppColor';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../../utils/ResponsiveSize';
import CustomButton from '../../components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { login, saveData } from '../../redux/action/Action';
const LoginWithMobile = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const otpLength = 6;
  const [otpArray, setOtpArray] = useState(Array(otpLength).fill(''));
  const [remainingTime, setRemainingTime] = useState(30);
  const [showResendButton, setShowResendButton] = useState(false);
  const [showErrorText, setShowErrorText] = useState('');
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (otpArray.length === 6) {
      setShowError(false);
      setShowErrorText('');
    }
  }, [otpArray]);
  useEffect(() => {
    if (remainingTime <= 0) {
      setShowResendButton(true);
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const refArray = useRef(otpArray.map(() => React.createRef()));
  const handleOtpChange = (index, value) => {
    const otpCopy = [...otpArray];
    otpCopy[index] = value;
    setOtpArray(otpCopy);

    if (value && index < otpLength - 1) {
      refArray.current[index + 1].current.focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && !otpArray[index] && index > 0) {
      refArray.current[index - 1].current.focus();
    }
  };
  const handleOtpSubmit = async () => {
    const otp = otpArray.join('');
    if (otp.trim() === '') {
      setShowError(true);
      setShowErrorText('Please enter 6 digit code !');
      return;
    }
    if (otp.length < 4) {
      setShowError(true);
      setShowErrorText('Enter exact 4 digit code!');
      return;
    }
    {
      if (otp === '051020') {
        // Alert.alert('Success');
        const user ={
          email:"aviashishranjan@gmail.com",
          password:"password"
        }
        await AsyncStorage.setItem('isLoggedIn', 'Yes');
        await AsyncStorage.setItem('user', JSON.stringify(user));
        dispatch(login('Yes'));
        dispatch(saveData('Yes'));
      } else {
        setShowError(true);
        setShowErrorText('Enter valid OTP');
      }
    }
  };
  const renderInputs = () => {
    return otpArray.map((item, index) => (
      <TextInput
        key={index}
        style={[
          styles.otpBox,
          {borderColor: showError ? Colors.red : Colors.borderColor},
        ]}
        keyboardType="number-pad"
        maxLength={1}
        onChangeText={text => handleOtpChange(index, text)}
        onKeyPress={({nativeEvent}) => handleKeyPress(index, nativeEvent.key)}
        ref={refArray.current[index]}
        value={otpArray[index]}
      />
    ));
  };

  const resendOtp = async () => {
    Alert.alert('Success', 'OTP resend Successfully');
    // Alert.alert(`${string.success}`, `${string.successDescriptions}`);
    setRemainingTime(30);
    setShowResendButton(false);
    setShowError(false);
    setShowErrorText('');
    setOtpArray(Array(otpLength).fill(''));
    if (refArray.current[0] && refArray.current[0].current) {
      refArray.current[0].current.focus();
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
        <View style={styles.box}>
          <Text style={[styles.text, {fontFamily: FontFamily.Roboto_Light}]}>
            Mobile Number
          </Text>
          <View style={styles.textInputBox}>
            <Text style={styles.text}>+91</Text>
            <Feather
              name="chevron-down"
              color={Colors.white}
              size={textScale(14)}
            />
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor={Colors.white}
              value={mobile}
              maxLength={10}
              onChangeText={text => setMobile(text)}
              style={styles.inputBox}
            />
          </View>
        </View>
        <View style={[styles.box, {marginTop: moderateScaleVertical(40.5)}]}>
          <Text style={[styles.text, {fontFamily: FontFamily.Roboto_Light}]}>
            Enter Mobile OTP
          </Text>
          <View style={styles.otpContainer}>
            {renderInputs()}
            {showResendButton ? (
              <TouchableOpacity style={{width: '20%', alignSelf: 'flex-end',alignItems:'center'}} onPress={resendOtp}>
                <Ionicons
                  name="refresh-circle"
                  size={textScale(30)}
                  color={Colors.statusBarColor}
                />
              </TouchableOpacity>
            ) : (
              <Text style={styles.timerText}>{remainingTime} sec</Text>
            )}
          </View>
          {showError && (
            <View style={styles.errorHolder}>
              <Text style={styles.errorText}>{showErrorText}</Text>
            </View>
          )}
        </View>
        <View style={styles.buttonHolder}>
          <CustomButton
            name={'Sign in'}
            handleAction={handleOtpSubmit}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginWithMobile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  buttonHolder: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: moderateScaleVertical(127.5),
  },
  scrollViewHolder: {
    borderColor: 'red',
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
  inputBox: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
  },
  box: {
    marginTop: moderateScaleVertical(92),
    width: '90%',
    alignSelf: 'center',
  },
  textInputBox: {
    borderBottomWidth: 2,
    borderColor: Colors.borderColor,
    flexDirection: 'row',
    gap: moderateScale(5),
    marginTop:
      Platform.OS === 'android'
        ? moderateScaleVertical(0)
        : moderateScaleVertical(10),
    alignItems: 'center',
    paddingBottom: moderateScaleVertical(5),
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    justifyContent: 'space-evenly',
    marginTop: moderateScaleVertical(9),
  },
  otpBox: {
    width: moderateScale(40),
    height: moderateScale(50),
    borderWidth: moderateScale(2),
    textAlign: 'center',
    fontSize: textScale(18),
    color: Colors.white,
    borderRadius: moderateScale(5),
  },
  timerText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: textScale(18),
    fontFamily: FontFamily.Roboto_Medium,
  },
  errorHolder:{
    marginVertical:moderateScaleVertical(10),
  },
  errorText:{
    fontFamily:FontFamily.Roboto_Regular,
    fontSize:textScale(14),
    color:Colors.red
  }
});
