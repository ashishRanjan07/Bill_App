import {
  Alert,
  Image,
  ImageBackground,
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
import Colors from '../../utils/AppColor';
import FontFamily from '../../utils/FontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../../utils/ResponsiveSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const RegisterVerification = () => {
  const navigation = useNavigation();
  const otpLength = 6;
  const [otpArray, setOtpArray] = useState(Array(otpLength).fill(''));
  const [remainingTime, setRemainingTime] = useState(30);
  const [showResendButton, setShowResendButton] = useState(false);
  const [showErrorText, setShowErrorText] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (otpArray.length === 4) {
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
      setShowErrorText('Please enter 4 digit code !');
      return;
    }
    if (otp.length < 4) {
      setShowError(true);
      setShowErrorText('Enter exact 4 digit code!');
      return;
    }
    {
      if (otp === '0510') {
        Alert.alert('Success');
        // await AsyncStorage.setItem('isOTPVerified', 'Yes');
        // dispatch(login('Yes'));
        // dispatch(saveData('Yes'));
        // navigation.navigate('App Stack');
      } else {
        setShowError(true);
        setShowErrorText('Enter valid OTP');
      }
    }
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

  return (
    <ImageBackground source={ImagePath.background} style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={styles.backIconHolder}>
        <Ionicons name="arrow-back" size={textScale(25)} color={Colors.white} />
      </View>
      <ScrollView style={styles.scrollViewHolder}>
        <View style={styles.logoHolder}>
          <Image
            source={ImagePath.logo}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        </View>
        <View style={styles.accountTextHolder}>
          <Text style={styles.text}>
            In order to start using your account, you need to confirm your email
            address and mobile number.
          </Text>
        </View>
        <View style={[styles.box, {marginTop: moderateScaleVertical(40.5)}]}>
          <Text
            style={[
              styles.text,
              {fontFamily: FontFamily.Roboto_Light, textAlign: null},
            ]}>
            Enter Email OTP
          </Text>
          <View style={styles.otpContainer}>
            {renderInputs()}
            {showResendButton ? (
              <TouchableOpacity
                style={{
                  width: '20%',
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={resendOtp}>
                {/* <CustomButton name={'Resend OTP'} handleAction={resendOtp} /> */}
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

        <View style={[styles.box, {marginTop: moderateScaleVertical(40.5)}]}>
          <Text
            style={[
              styles.text,
              {fontFamily: FontFamily.Roboto_Light, textAlign: null},
            ]}>
            Enter Mobile OTP
          </Text>
          <View style={styles.otpContainer}>
            {renderInputs()}
            {showResendButton ? (
              <TouchableOpacity
                style={{
                  width: '20%',
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={resendOtp}>
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
            name={'Verify'}
            handleAction={() => navigation.navigate('VerificationSuccess')}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RegisterVerification;

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
    marginTop: moderateScaleVertical(83),
  },
  scrollViewHolder: {
    borderColor: 'red',
    flex: 1,
  },
  logoHolder: {
    marginTop: moderateScaleVertical(29.8),
    alignItems: 'center',
  },
  imageStyle: {
    width: moderateScale(180),
    height: moderateScale(62),
  },
  accountTextHolder: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(97),
    alignItems: 'center',
  },
  backIconHolder: {
    marginVertical: moderateScaleVertical(62),
    marginLeft: moderateScale(20),
    width: '10%',
    alignItems: 'center',
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
    textAlign: 'center',
    letterSpacing: scale(1),
    lineHeight: scale(20),
  },
  box: {
    marginTop: moderateScaleVertical(92),
    width: '90%',
    alignSelf: 'center',
  },
  otpBox: {
    width: moderateScale(40),
    height: moderateScale(50),
    // borderBottomWidth: moderateScale(2),
    borderWidth: 2,
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
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    justifyContent: 'space-evenly',
    marginTop: moderateScaleVertical(9),
  },
});
