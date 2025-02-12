import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import WrapperContainer from "../../../components/WrapperContainer";
import FontFamily from "../../../utils/FontFamily";
import Colors from "../../../utils/AppColor";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../utils/ResponsiveSize";
import InternalHeader from "../../../components/InternalHeader";
import { ImagePath } from "../../../utils/ImagePath";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomButton from "../../../components/CustomButton";

const ReviewProductSubscription = () => {
  return (
    <WrapperContainer>
      <InternalHeader title={"Buy Subscription"} />
      <View style={{ flex: 1 }}>
        <Text style={styles.headerText}>Product Details</Text>
        <View style={styles.productView}>
          <View style={{ width: "30%" }}>
            <Image
              source={ImagePath.printer3}
              resizeMode="center"
              style={{ width: "100%", height: moderateScale(100) }}
            />
          </View>
          <View style={{ width: "70%", gap: moderateScale(5) }}>
            <View style={styles.view}>
              <View style={{ width: "50%" }}>
                <Text style={styles.text}>Product</Text>
              </View>
              <View style={{ width: "50%" }}>
                <Text>Laser Jet 900 Series</Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={{ width: "50%" }}>
                <Text style={styles.text}>Product Type</Text>
              </View>
              <View style={{ width: "50%" }}>
                <Text>CLASSIII</Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={{ width: "50%" }}>
                <Text style={styles.text}>Product ID</Text>
              </View>
              <View style={{ width: "50%" }}>
                <Text>900 Series</Text>
              </View>
            </View>
            <View style={styles.view}>
              <View style={{ width: "50%" }}>
                <Text style={styles.text}>Product Price</Text>
              </View>
              <View style={{ width: "50%" }}>
                <Text>$40.00</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.headerText}>Subscription Plan</Text>
        <View
          style={{
            borderColor: Colors.white,
            borderWidth: 2,
            backgroundColor: Colors.white,
            borderRadius: moderateScale(5),
            marginTop: moderateScaleVertical(10),
            width: "95%",
            alignSelf: "center",
            gap: moderateScaleVertical(10),
          }}
        >
          <View style={styles.view}>
            <View style={{ width: "50%" }}>
              <Text style={styles.text}>Package:</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text>Printer as a service - Gold Package</Text>
            </View>
          </View>
          <View style={styles.view}>
            <View style={{ width: "50%" }}>
              <Text style={styles.text}>Subscription Price:</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text>$60.00</Text>
            </View>
          </View>
        </View>

        <Text style={styles.headerText}>Warranty Add-on Plan</Text>
        <View
          style={{
            borderColor: Colors.white,
            borderWidth: 2,
            backgroundColor: Colors.white,
            borderRadius: moderateScale(5),
            marginTop: moderateScaleVertical(10),
            width: "95%",
            alignSelf: "center",
            gap: moderateScaleVertical(10),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              padding: moderateScale(10),
            }}
          >
            <View style={{ width: "80%" }}>
              <View style={styles.view}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.text}>Package:</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text>Printer as a service - Gold Package</Text>
                </View>
              </View>
              <View style={styles.view}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.text}>Subscription Price:</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text>$60.00</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={{ width: "20%", alignItems: "center" }}>
              <AntDesign
                name="closecircleo"
                size={textScale(25)}
                color={Colors.black}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            marginVertical: moderateScaleVertical(10),
            backgroundColor: "#187FBF",
            padding: moderateScale(10),
            borderRadius: moderateScaleVertical(10),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.Roboto_Bold,
              fontSize: textScale(14),
              color: Colors.white,
              padding: moderateScale(5),
            }}
          >
            Total Price to be paid:$110.00
          </Text>
        </View>
        <View
          style={{
            width: "80%",
            alignSelf: "center",
            marginVertical: moderateScaleVertical(10),
          }}
        >
          <CustomButton
            name={"Pay Now"}
            handleAction={() => console.log("Clicked on the Pay now")}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ReviewProductSubscription;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
    fontSize: textScale(18),
    padding: moderateScale(10),
  },
  productView: {
    borderWidth: 2,
    width: "95%",
    alignSelf: "center",
    padding: moderateScale(10),
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: moderateScale(5),
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    color: Colors.black,
  },
});
