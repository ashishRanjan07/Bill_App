import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/AppColor';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../utils/ResponsiveSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontFamily from '../utils/FontFamily';

const BoxItem = ({name, image, handleAction}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={handleAction}>
      <MaterialIcons
        name={image}
        size={textScale(35)}
        color={Colors.iconColor}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default BoxItem;

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    borderColor: Colors.statusBarColor,
    width: moderateScale(110),
    height: moderateScale(110),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: moderateScaleVertical(10),
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.iconColor,
    fontSize: textScale(14),
    textAlign: 'center',
  },
});
