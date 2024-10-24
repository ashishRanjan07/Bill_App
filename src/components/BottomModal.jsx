import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/AppColor';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../utils/ResponsiveSize';
import FontFamily from '../utils/FontFamily';
import {BarIndicator} from 'react-native-indicators';

const BottomModal = ({visible, hideModal, message}) => {
  console.log("visible",visible);
  console.log("hide Modal",hideModal)
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      statusBarTranslucent
      onRequestClose={hideModal}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={{marginVertical: moderateScaleVertical(10)}}>
            <BarIndicator
              color={Colors.statusBarColor}
              count={4}
              size={textScale(30)}
            />
          </View>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: Colors.white,
    padding: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    gap: moderateScale(20),
  },
  messageText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    color: Colors.black,
    textAlign: 'center',
    letterSpacing: scale(1),
    lineHeight: scale(20),
  },
});
