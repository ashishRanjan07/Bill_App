import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../utils/ResponsiveSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/AppColor';
import {useNavigation} from '@react-navigation/native';
import FontFamily from '../utils/FontFamily';

const InternalHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.detailsHolder}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: '20%'}}>
          <Ionicons
            name="arrow-back-outline"
            size={textScale(30)}
            color={Colors.black}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default InternalHeader;

const styles = StyleSheet.create({
  main: {
    padding: moderateScale(10),
  },
  text: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(18),
    color: Colors.black,
  },
  detailsHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});
