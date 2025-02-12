import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../utils/AppColor";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from "../utils/ResponsiveSize";
import FontFamily from "../utils/FontFamily";

const BottomListModal = ({
  visible,
  hideModal,
  message,
  data,
  handleSelection,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      statusBarTranslucent
      onRequestClose={hideModal}
    >
      <TouchableOpacity style={styles.overlay} onPress={hideModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.messageText}>{message}</Text>
          {data?.map((item) => (
            <TouchableOpacity
              key={item?.id}
              style={styles.itemHolder}
              onPress={() => handleSelection(item)}
            >
              <Text style={styles.text}>{item?.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomListModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: Colors.white,
    padding: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingBottom: moderateScaleVertical(30),
  },
  messageText: {
    marginBottom: moderateScaleVertical(10),
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    color: Colors.black,
    textAlign: "center",
    letterSpacing: scale(1),
    lineHeight: scale(20),
  },
  itemHolder: {
    borderWidth: 2,
    padding: moderateScale(10),
    backgroundColor: Colors.statusBarColor,
    alignItems: "center",
    borderRadius: moderateScale(10),
    borderColor: Colors.statusBarColor,
    marginBottom: moderateScaleVertical(10),
  },
  text: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(16),
    color: Colors.white,
    textAlign: "center",
  },
});
