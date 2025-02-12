import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import InternalHeader from "../../../components/InternalHeader";
import Colors from "../../../utils/AppColor";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from "../../../utils/ResponsiveSize";
import { ImagePath } from "../../../utils/ImagePath";
import FontFamily from "../../../utils/FontFamily";
import CustomButton from "../../../components/CustomButton";

const BuySubscriptionDetails = ({ route }) => {
  const { item } = route.params;
  const [active, setActive] = useState(1);
  const [activeData, setActiveData] = useState(
    item?.details?.[0]?.subscriptionDetails
  );
  const [promoCode, setPromoCode] = useState("");

  const handleTitlePressed = (item) => {
    setActive(item?.id);
    setActiveData(item?.subscriptionDetails);
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleTitlePressed(item)}
        key={item?.id}
        style={[
          styles.buttonHolder,
          {
            backgroundColor:
              active === item?.id ? Colors.statusBarColor : Colors.white,
          },
        ]}
      >
        <Text
          style={[
            styles.headertext,
            { color: active === item?.id ? Colors.white : Colors.black },
          ]}
        >
          {item?.title}{" "}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <InternalHeader title={"Buy Subscription"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upperDesignView} />
        <View style={{ marginTop: "15%" }}>
          <View style={styles.imageHolder}>
            <Image
              source={ImagePath.printer}
              style={styles.imageStyle}
              resizeMode="cover"
            />
          </View>
          <View style={styles.headerHolder}>
            <Text style={styles.text}>{item?.productName}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: moderateScaleVertical(10),
            }}
          >
            <FlatList
              data={item?.details}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
              horizontal
            />
          </View>
          <View style={styles.detailsHolder}>
            <Text style={styles.priceText}>${activeData?.amount}</Text>
            <View style={styles.valueHolder}>
              <Text style={styles.keyText}>Start date:</Text>
              <Text
                style={[
                  styles.keyText,
                  { fontFamily: FontFamily.Roboto_Regular },
                ]}
              >
                {activeData?.startDate}
              </Text>
            </View>
            <View style={styles.valueHolder}>
              <Text style={styles.keyText}>End date:</Text>
              <Text
                style={[
                  styles.keyText,
                  { fontFamily: FontFamily.Roboto_Regular },
                ]}
              >
                {activeData?.endDate}
              </Text>
            </View>
            <View style={styles.valueHolder}>
              <Text style={styles.keyText}>Market:</Text>
              <Text
                style={[
                  styles.keyText,
                  { fontFamily: FontFamily.Roboto_Regular },
                ]}
              >
                {activeData?.market}
              </Text>
            </View>
            <Text style={styles.descriptionText}>
              {activeData?.description}
            </Text>
          </View>
          {/* Coupon Code Section */}
          <View style={styles.couponHolder}>
            <TextInput
              placeholder="Enter Promo Code"
              placeholderTextColor={Colors.searchTextColor}
              style={styles.textInputBox}
              value={promoCode}
              onChange={(text) => setPromoCode(text)}
            />
            <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.customButtonHolder}>
            <CustomButton
              name={"Pay Now"}
              handleAction={() => console.log("Clieked on the Pay now Button ")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuySubscriptionDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  upperDesignView: {
    position: "absolute",
    width: "100%",
    height: moderateScale(150),
    backgroundColor: Colors.white,
    borderBottomEndRadius: moderateScale(100),
    borderBottomStartRadius: moderateScale(100),
  },
  imageHolder: {
    borderWidth: 2,
    width: moderateScale(137),
    height: moderateScale(137),
    alignSelf: "center",
    borderRadius: moderateScale(1000),
    borderColor: Colors.statusBarColor,
    backgroundColor: Colors.statusBarColor,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: moderateScale(70),
    height: moderateScale(65),
  },
  text: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(17),
    color: Colors.black,
  },
  headerHolder: {
    marginTop: moderateScaleVertical(10),
    alignItems: "center",
    alignSelf: "center",
  },
  headertext: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(17),
    color: Colors.black,
  },
  buttonHolder: {
    width: moderateScale(110),
    height: moderateScale(39),
    marginHorizontal: moderateScale(5),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(10),
    backgroundColor: Colors.white,
    padding: moderateScale(5),
  },
  priceText: {
    fontFamily: FontFamily?.Roboto_Bold,
    fontSize: textScale(22),
    color: Colors.statusBarColor,
  },
  keyText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
    fontSize: textScale(12),
    width: moderateScale(100),
  },
  descriptionText: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(11),
    color: Colors.searchTextColor,
    letterSpacing: scale(1),
    lineHeight: scale(15),
  },
  valueHolder: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
  },
  detailsHolder: {
    width: "90%",
    alignSelf: "center",
    gap: moderateScaleVertical(10),
    marginVertical: moderateScaleVertical(10),
  },
  textInputBox: {
    borderWidth: 2,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    paddingHorizontal: moderateScale(10),
    width: "70%",
    height: moderateScale(39),
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
  },
  couponHolder: {
    width: "90%",
    alignSelf: "center",
    marginVertical: moderateScaleVertical(10),
    flexDirection: "row",
    borderRadius: moderateScale(10),
    overflow: "hidden",
  },
  buttonView: {
    backgroundColor: Colors.black,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(14),
  },
  customButtonHolder: {
    width: "90%",
    alignSelf: "center",
    marginTop: moderateScale(12),
  },
});
