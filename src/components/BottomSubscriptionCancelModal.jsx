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
import CustomButton from './CustomButton';

const BottomSubscriptionCancelModal = ({visible, hideModal,handleCancel}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      statusBarTranslucent
      onRequestClose={hideModal}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.messageText}>Are you sure want to cancel the subscription?</Text>
          <CustomButton
            name={'Confirm'}
            handleAction={handleCancel}
          />
          <CustomButton
            name={'Cancel'}
            handleAction={hideModal}
          />
        </View>
      </View>
    </Modal>
  )
}

export default BottomSubscriptionCancelModal

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
      gap: moderateScale(10),
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
  