import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import WrapperContainer from "../../components/WrapperContainer";
import { ImagePath } from "../../utils/ImagePath";
import Colors from "../../utils/AppColor";
import NetInfo from "@react-native-community/netinfo";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import CustomButton from "../../components/CustomButton";
import { showMessage } from "react-native-flash-message";

const NoInternet = () => {
  const handelTryAgain = async () => {
    NetInfo.addEventListener((state) => {
      if (state.isConnected === true) {
        showMessage({
          message: "Now your are connected!",
          type: "success",
          icon: "success",
        });
      } else {
        showMessage({
          message: "Check your internet connection!",
          type: "danger",
          icon: "danger",
        });
      }
    });
  };
  return (
    <WrapperContainer>
      <View style={styles.main}>
        <View style={styles.contentHolder}>
          <Image
            source={ImagePath.noInternet}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <Text style={styles.headerText}>Lost Connection</Text>
          <Text style={styles.text}>
            Whoops... no internet connection found. Check your connection
          </Text>
          <View style={{ width: "80%" }}>
            <CustomButton name={"Try Again"} handleAction={handelTryAgain} />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    gap: moderateScaleVertical(20),
  },
  imageStyle: {
    width: "80%",
    height: "40%",
    borderRadius: moderateScale(100),
  },
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(18),
    color: Colors.searchTextColor,
    textAlign: "center",
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(16),
    textAlign: "center",
    letterSpacing: scale(1),
    width: "95%",
    alignSelf: "center",
    color: Colors.black,
  },
  contentHolder: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    gap: moderateScaleVertical(15),
    borderRadius: moderateScale(10),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    elevation: moderateScale(10),
    shadowRadius: moderateScale(3),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
});
