import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../utils/AppColor'
import { moderateScale, textScale } from '../utils/ResponsiveSize'
import FontFamily from '../utils/FontFamily'

const CustomButtonInactive = ({name,handleAction}) => {
  return (
    <TouchableOpacity onPress={handleAction} style={styles.button}>
    <Text style={styles.text}>{name}</Text>
  </TouchableOpacity>
  )
}

export default CustomButtonInactive

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: 'transparent',
        borderRadius: moderateScale(5),
        alignItems: 'center',
        padding: moderateScale(10),
        borderWidth:moderateScale(2),
        borderColor:Colors.white
      },
      text: {
        fontFamily: FontFamily.Roboto_Regular,
        fontSize: textScale(16),
        color: Colors.white,
      },
})