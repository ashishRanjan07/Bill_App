import {
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
import React, {useState} from 'react';
import {ImagePath} from '../../utils/ImagePath';
import Colors from '../../utils/AppColor';
import FontFamily from '../../utils/FontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../../utils/ResponsiveSize';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgetPassword = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
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
          <Text style={styles.text}>Forgot Password?</Text>
        </View>
        <View style={styles.descriptionHolder}>
          <Text style={styles.descriptionText}>
            Enter your email address you're using for your account below and we
            willsend you a password reset link
          </Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor={Colors.white}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            style={styles.inputBox}
          />
        </View>
        <View style={styles.buttonHolder}>
          <CustomButton
            name={'Request reset link'}
            handleAction={() => navigation.navigate('LoginWithEmail')}
          />
        </View>
        <TouchableOpacity style={styles.dAccountHolder} onPress={()=> navigation.goBack()}>
          <Text style={styles.text}>Back to Sign in</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default ForgetPassword;

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
    marginTop: moderateScaleVertical(163.5),
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
  descriptionHolder: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScaleVertical(22),
  },
  descriptionText: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(12),
    textAlign: 'center',
    color: Colors.white,
    lineHeight: scale(20),
  },
  textInput: {
    marginTop: moderateScaleVertical(95),
    width: '90%',
    alignSelf: 'center',
  },
  dAccountHolder: {
    marginTop: moderateScaleVertical(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(5),
  },
});
