import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../utils/AppColor';
import DrawerHeader from '../../components/DrawerHeader';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../utils/ResponsiveSize';
import FontFamily from '../../utils/FontFamily';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Swap = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.background}
      />
      <DrawerHeader title={'Swap'} />
      <View style={styles.content}>
        <View style={styles.contentholder}>
          <Text style={styles.headerText}>Scan New Battery</Text>
          <View style={styles.buttonHolder2}>
            <View style={{width: '45%'}}>
              <CustomButton
                name={'Scan Code'}
                handleAction={() => navigation.navigate('Scan Code')}
              />
            </View>
            <TouchableOpacity style={styles.buttonHolder}>
              <Text style={styles.text}>Enter Manually</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Swap;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    // borderWidth: 2,
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(16),
    color: Colors.black,
  },
  buttonHolder: {
    borderWidth: 2,
    borderRadius: moderateScale(5),
    borderColor: Colors.borderColor2,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHolder2: {
    marginTop: moderateScaleVertical(25),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  contentholder: {
    borderWidth: 2,
    marginVertical: moderateScaleVertical(10),
    width: '90%',
    alignSelf: 'center',
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    elevation: moderateScale(5),
  },
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    color: Colors.black,
  },
});
