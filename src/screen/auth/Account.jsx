import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
import CustomButtonInactive from '../../components/CustomButtonInactive';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <ImageBackground
        source={ImagePath.background}
        style={styles.backgroundImageHolder}>
        <Image
          source={ImagePath.logo}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <View style={styles.subscriptionTextHolder}>
          <Text style={styles.text}>Subscription</Text>
          <Text style={styles.text2}>Manager</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.descriptionHolder}>
          <Text style={styles.descriptionText}>
            Enable your customers to manage everything about their subscriptions
            using our omnichannel subscription management platform anytime,
            anywhere.
          </Text>
        </View>
        <View style={styles.buttonHolder}>
          <CustomButton
            name={'Sign in'}
            handleAction={() => navigation.navigate("Login")}
          />
          <CustomButtonInactive
            name={'Sign up'}
            handleAction={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backgroundImageHolder: {
    height: '100%',
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: moderateScale(180),
    height: moderateScale(62),
    alignSelf: 'center',
  },
  subscriptionTextHolder: {
    marginTop: moderateScaleVertical(103),
    width: moderateScale(300),
    alignSelf: 'center',
  },
  text: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(33),
    color: Colors.white,
    textAlign: 'left',
  },
  text2: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(57),
    color: Colors.white,
  },
  divider: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.borderColor,
    marginVertical: moderateScaleVertical(10),
  },
  descriptionHolder: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  descriptionText: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    textAlign: 'left',
    color: Colors.white,
    letterSpacing: scale(1),
    lineHeight: scale(20),
  },
  buttonHolder: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(98),
    gap: moderateScaleVertical(12),
  },
});
