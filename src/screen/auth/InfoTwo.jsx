import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImagePath} from '../../utils/ImagePath';
import Colors from '../../utils/AppColor';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../../utils/ResponsiveSize';
import FontFamily from '../../utils/FontFamily';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const InfoTwo = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.headerHolder}>
        <Text style={styles.text1}>Buy Your</Text>
        <Text style={styles.text2}>SUBSCRIPTION</Text>
        <Text style={styles.text1}>Today</Text>
      </View>
      <View style={styles.imageHolder}>
        <Image
          source={ImagePath.carouselTwo}
          resizeMode="cover"
          style={{width: moderateScale(278), height: moderateScale(223)}}
        />
      </View>
      <View style={styles.activeHolder}>
        <Image
          source={ImagePath.activeTwo}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.buttonHolder}>
        <CustomButton
          name={'Get Started'}
          handleAction={() => navigation.navigate('Account')}
        />
      </View>
    </View>
  );
};

export default InfoTwo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  text1: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(20),
    color: Colors.white,
    letterSpacing: scale(1),
  },
  text2: {
    fontFamily: FontFamily.Roboto_Bold,
    color: Colors.white,
    fontSize: textScale(30),
  },
  activeHolder: {
    marginTop: moderateScale(43),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHolder: {
    borderWidth: 2,
    gap: moderateScaleVertical(20),
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(81),
  },
  imageHolder: {
    marginTop: moderateScaleVertical(56),
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerHolder: {
    orderColor: 'red',
    marginTop: moderateScaleVertical(124),
    alignItems: 'center',
    alignSelf: 'center',
    gap: moderateScaleVertical(3),
  },
});
