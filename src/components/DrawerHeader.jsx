import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../utils/ResponsiveSize';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../utils/AppColor';
import {useNavigation} from '@react-navigation/native';
import FontFamily from '../utils/FontFamily';

const DrawerHeader = ({title}) => {
  const navigation = useNavigation();
  const menuHandleClicked = () => {
    navigation.openDrawer();
  };
  const handleNotificationClicked = () => {
    navigation.navigate('Notification');
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={menuHandleClicked}>
        <Feather name="menu" color={Colors.black} size={textScale(25)} />
      </TouchableOpacity>
      <View>
        <Text style={styles.header}> {title}</Text>
      </View>
      <TouchableOpacity onPress={handleNotificationClicked}>
        <Feather name="bell" color={Colors.black} size={textScale(25)} />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  main: {
    padding: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  header: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(18),
    textAlign: 'center',
    color: Colors.black,
  },
});
