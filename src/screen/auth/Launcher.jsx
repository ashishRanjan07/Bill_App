import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {ImagePath} from '../../utils/ImagePath';
import {moderateScale} from '../../utils/ResponsiveSize';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../utils/AppColor';
import {useSelector} from 'react-redux';

const Launcher = () => {
  const navigation = useNavigation();
  const loggedInValue = useSelector(state => state.isLoggedIn);
  // console.log(loggedInValue, 'Line 18');
  useEffect(() => {
    // console.log(loggedInValue, 'Line 20');
    if (loggedInValue === 'No') {
      setTimeout(() => {
        navigation.navigate('InfoOne');
      }, 2000);
    }
  }, []);
  return (
    <View style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <ImageBackground
        source={ImagePath.launcher}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.imageHolder}>
          <Image
            source={ImagePath.logo}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Launcher;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  imageStyle: {
    width: moderateScale(236),
    height: moderateScale(82),
  },
  imageHolder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
