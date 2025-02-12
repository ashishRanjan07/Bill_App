import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../utils/ResponsiveSize';
import Colors from '../utils/AppColor';
import FontFamily from '../utils/FontFamily';
import Feather from 'react-native-vector-icons/Feather';

const CustomSearch = ({value, onChange}) => {
  //   console.log(value, onChange, 'Line 5');
  return (
    <View style={styles.main}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.searchTextColor}
        value={value}
        onChangeText={onChange}
        style={styles.inputBox}
      />
      <View style={{width: '15%', alignItems: 'center'}}>
        <Feather
          name="search"
          color={Colors.searchTextColor}
          size={textScale(20)}
        />
      </View>
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderRadius: moderateScale(5),
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    height: moderateScale(45),
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: moderateScale(5),
    shadowRadius: moderateScale(3),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
  inputBox: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
    color: Colors.black,
    width: '85%',
  },
});
