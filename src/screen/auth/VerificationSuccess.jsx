import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../../utils/ResponsiveSize';
import FontFamily from '../../utils/FontFamily';
import Colors from '../../utils/AppColor';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const VerificationSuccess = () => {
  const navigation = useNavigation();
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
        <View
          style={{
            marginTop: moderateScaleVertical(125),
            width: '85%',
            alignSelf: 'center',
            alignItems: 'center',
            gap: moderateScaleVertical(11),
          }}>
          <Image
            source={ImagePath.successIcon}
            resizeMode="cover"
            style={{width: moderateScale(53), height: moderateScale(53)}}
          />
          <Text style={styles.text}>Congratulations</Text>
          <Text style={styles.text2}>
            Your account has been successfully created
          </Text>
        </View>
        <View style={styles.buttonHolder}>
          <CustomButton
            name={"Let's Get Started"}
            handleAction={() => navigation.replace('Login')}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default VerificationSuccess;

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
    marginTop: moderateScaleVertical(137),
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
  text: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(18),
    color: Colors.white,
  },
  text2: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.white,
    textAlign: 'center',
    lineHeight: scale(20),
  },
});
