import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import WrapperContainer from "../../../components/WrapperContainer";
import InternalHeader from "../../../components/InternalHeader";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../utils/ResponsiveSize";
import Carousel from "react-native-reanimated-carousel";
import { ImagePath } from "../../../utils/ImagePath";
import Colors from "../../../utils/AppColor";
import FontFamily from "../../../utils/FontFamily";
import { ScrollView } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const SolutionOrderDetails = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const imageData = [ImagePath.printer3, ImagePath.printer2];
  const width = Dimensions.get("window").width;
  const [count, setCount] = useState(1);
  return (
    <WrapperContainer>
      <View style={styles.main}>
        <InternalHeader title={"Solution Order Details"} />
        <View style={styles.buttonHolder}>
          <View style={styles.countHolder}>
            <TouchableOpacity>
              <Octicons
                name="diff-added"
                size={textScale(20)}
                color={Colors.statusBarColor}
              />
            </TouchableOpacity>
            <Text style={[styles.buttonText, { color: Colors.statusBarColor }]}>
              {count}
            </Text>
            <TouchableOpacity>
              <AntDesign
                name="minussquareo"
                size={textScale(20)}
                color={Colors.statusBarColor}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buyNowButton}
            onPress={() =>
              navigation.navigate("Choose Subscription", { data: data })
            }
          >
            <Text style={styles.buttonText}>Choose Subscription</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: moderateScale(50) }}
        >
          <View style={styles.imageHolder}>
            {/* Show Carousel Image here */}
            <Carousel
              loop
              width={width}
              height={moderateScale(250)}
              autoPlay={true}
              data={imageData}
              renderItem={({ item }) => (
                <View style={styles.carouselImageContainer}>
                  <Image
                    source={item}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              )}
            />
          </View>
          {/* Product Overall Details */}
          <View style={styles.contentHolder}>
            <View style={styles.innerView}>
              <Text style={styles.nameText}>{data?.product_name}</Text>
              <Text style={[styles.nameText, { fontSize: textScale(14) }]}>
                {data?.product_description}
              </Text>
              <Text style={styles.nameText}>Price Rs.{data?.price}/Unit</Text>
            </View>
          </View>
          {/* Product warranty and There details */}
          <View style={styles.contentHolder}>
            <View style={styles.innerView}>
              <Text style={styles.internalHeader}>
                Warranty Related Information
              </Text>
              <Text style={styles.nameText}>
                Warranty Period {data?.warranty_period} Year
              </Text>
              <Text style={[styles.nameText, { fontSize: textScale(14) }]}>
                {data?.warranty_description}
              </Text>
            </View>
          </View>
          {/* Product Details */}
          <View style={styles.contentHolder}>
            <View style={styles.innerView}>
              <Text style={styles.internalHeader}>
                Basic Product Information
              </Text>
              <View style={styles.view1}>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>Manufacturer</Text>
                </View>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>{data?.manufacturer}</Text>
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>Model Number</Text>
                </View>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>{data?.model_number}</Text>
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>Serial Number</Text>
                </View>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>{data?.serial_number}</Text>
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>Color</Text>
                </View>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>{data?.color}</Text>
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>Weight</Text>
                </View>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>{data?.weight}</Text>
                </View>
              </View>
              <Text style={[styles.nameText, { fontSize: textScale(14) }]}>
                {data?.dimensions}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </WrapperContainer>
  );
};

export default SolutionOrderDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageHolder: {
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    height: moderateScale(250),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  carouselImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.searchTextColor,
    fontSize: textScale(16),
  },
  contentHolder: {
    marginVertical: moderateScaleVertical(10),
    width: "95%",
    alignSelf: "center",
  },
  innerView: {
    backgroundColor: Colors.white,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    gap: moderateScaleVertical(10),
  },
  internalHeader: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(18),
    color: Colors.black,
  },
  innerView1: {
    width: "50%",
    padding: moderateScale(10),
  },
  view1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text1: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(12),
    textTransform: "capitalize",
  },
  buttonText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.white,
    fontSize: textScale(16),
    textAlign: "center",
  },
  buttonHolder: {
    height: moderateScale(50),
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  countHolder: {
    width: "30%",
    padding: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.background,
  },
  buyNowButton: {
    borderWidth: 2,
    width: "70%",
    padding: moderateScale(10),
    backgroundColor: Colors.statusBarColor,
    alignItems: "center",
    borderColor: Colors.statusBarColor,
  },
});
