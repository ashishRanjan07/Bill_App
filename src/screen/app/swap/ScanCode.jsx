import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Colors from '../../../utils/AppColor';
import InternalHeader from '../../../components/InternalHeader';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale, textScale} from '../../../utils/ResponsiveSize';

const ScanCode = () => {
  const navigation = useNavigation();
  const cameraPermission = Camera.getCameraPermissionStatus();
  console.log(cameraPermission, 'Line 9');
  const [codeData,setData] = useState()
  useEffect(() => {
    requestCameraPermission();
  }, []);
  const requestCameraPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    // console.log(newCameraPermission, 'Line 29');
    if (newCameraPermission === 'denied') {
      Linking.openSettings();
    }
  };
  const device = useCameraDevice('back');
  if (device == null) return Alert.alert('Not Found', 'No Camera Found');

  const codeScanner = useMemo(() => ({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      if (codes.length > 0) {
        Alert.alert('Scanned Code', JSON.stringify(codes[0]));
      }
      setData(JSON.stringify(codes[0]))
    },
  }), []);
  
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.background}
      />
      <InternalHeader title={'Sacn Code'} />
      <Camera style={styles.cameraView} device={device} isActive={true}  codeScanner={codeScanner} />
      <TouchableOpacity style={styles.buttonHolder}>
        <AntDesign
          name="scan1"
          color={Colors.statusBarColor}
          size={textScale(50)}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ScanCode;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    // borderWidth: 2,
  },
  cameraView: {
    borderWidth: 2,
    borderColor: Colors.red,
    width: '100%',
    height: '100%',
  },
  buttonHolder: {
    borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.black,
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
});
