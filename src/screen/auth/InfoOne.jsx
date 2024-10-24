import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
import CustomButtonInactive from '../../components/CustomButtonInactive';
import Carousel from 'react-native-reanimated-carousel';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const InfoOne = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover"
        source={ImagePath.infoOne}>
        <View style={styles.headerHolder}>
          <Text style={styles.text}>Start Managing Your Subscription</Text>
          <Text style={styles.text2}>
            Today with Acuiti Subscription Manager
          </Text>
        </View>
        <View style={styles.activeHolder}>
          <Image
            source={ImagePath.activeOne}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.buttonHolder}>
          <CustomButton
            name={'Next'}
            handleAction={() => navigation.navigate('InfoTwo')}
          />
          <CustomButtonInactive
            name={'Skip'}
            handleAction={() => navigation.navigate('Login')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default InfoOne;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  viewHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerHolder: {
    width: '100%',
    marginTop: moderateScaleVertical(144),
    alignSelf: 'center',
    gap: moderateScale(5),
  },
  headerText: {
    fontSize: textScale(18),
    textAlign: 'center',
    fontFamily: FontFamily.Roboto_Bold,
    color: Colors.white,
    lineHeight: scale(28),
  },
  text: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(18),
  },
  text2: {
    color: Colors.white,
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(17),
    textAlign: 'center',
  },
  activeHolder: {
    marginTop: moderateScale(341),
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
  image: {
    width: moderateScale(30),
    height: moderateScale(10),
  },
});
