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
import Colors from '../../utils/AppColor';
import {ImagePath} from '../../utils/ImagePath';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../utils/ResponsiveSize';
import FontFamily from '../../utils/FontFamily';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
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
        <View style={styles.buttonHolder}>
          <CustomButton
            name={'Have an email account'}
            handleAction={() => navigation.navigate("LoginWithEmail")}
          />
        </View>
        <View style={styles.orHolder}>
          <View style={styles.line} />
          <Text style={styles.text}>Or</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor={Colors.white}
            value={mobileNumber}
            onChangeText={text => setMobileNumber(text)}
            maxLength={10}
            keyboardType="number-pad"
            style={styles.inputBox}
          />
        </View>
        <View
          style={[
            styles.buttonHolder,
            {marginTop: moderateScaleVertical(87.5)},
          ]}>
          <CustomButton name={'Sign in'} handleAction={()=> navigation.navigate("LoginWithMobile")}/>
        </View>
        <TouchableOpacity style={styles.dAccountHolder} onPress={()=>navigation.navigate("Register")}>
          <Text style={styles.text}>Don't have an account?</Text>
          <Text style={[styles.text, {color: Colors.statusBarColor}]}>
            Sign up
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

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
  dAccountHolder: {
    marginTop: moderateScaleVertical(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(5),
  },
  orHolder: {
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: moderateScaleVertical(46),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    justifyContent: 'center',
  },
  line: {
    width: '42%',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.borderColor,
  },
  textInput: {
    marginTop: moderateScaleVertical(55),
    width: '90%',
    alignSelf: 'center',
  },
});
