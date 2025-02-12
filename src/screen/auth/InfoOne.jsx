import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ImagePath } from "../../utils/ImagePath";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import Colors from "../../utils/AppColor";
import CustomButton from "../../components/CustomButton";
import CustomButtonInactive from "../../components/CustomButtonInactive";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const InfoOne = () => {
  const navigation = useNavigation();
  const imageStack = [
    { id: 1, images: ImagePath.carouselOne, activeImage: ImagePath.activeOne },
    { id: 2, images: ImagePath.carouselTwo, activeImage: ImagePath.activeTwo },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageStack.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover"
        source={ImagePath.infoOne}
      >
        <View style={styles.headerHolder}>
          <Text style={styles.text}>Start Managing Your Subscription</Text>
          <Text style={styles.text2}>
            Today with Acuiti Subscription Manager
          </Text>
        </View>
        <View style={styles.activeHolder}>
          {/* Show the slider image */}
          <Image
            source={imageStack[currentIndex].images}
            resizeMode="contain"
            style={styles.mainImage}
          />
          <Image
            source={imageStack[currentIndex].activeImage}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.buttonHolder}>
          <CustomButton
            name={"Next"}
            handleAction={() => navigation.navigate("InfoTwo")}
          />
          <CustomButtonInactive
            name={"Skip"}
            handleAction={() => navigation.navigate("Login")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default InfoOne;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  viewHolder: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headerHolder: {
    width: "100%",
    marginTop: moderateScaleVertical(144),
    alignSelf: "center",
    gap: moderateScale(5),
  },
  headerText: {
    fontSize: textScale(18),
    textAlign: "center",
    fontFamily: FontFamily.Roboto_Bold,
    color: Colors.white,
    lineHeight: scale(28),
  },
  text: {
    textAlign: "center",
    color: Colors.white,
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(18),
  },
  text2: {
    color: Colors.white,
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(17),
    textAlign: "center",
  },
  activeHolder: {
    // marginTop: moderateScale(341),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonHolder: {
    gap: moderateScaleVertical(20),
    width: "90%",
    alignSelf: "center",
    marginTop: moderateScale(81),
  },
  image: {
    width: moderateScale(30),
    height: moderateScale(10),
  },
  mainImage:{
    height:moderateScale(350)
  }
});
