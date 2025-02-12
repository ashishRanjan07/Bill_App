import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../utils/AppColor";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ImagePath } from "../../utils/ImagePath";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const ViewBillDetails = () => {
  const navigation = useNavigation();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={Colors.statusBarColor}
        barStyle={"dark-content"}
      />
      <SafeAreaView style={{ backgroundColor: Colors.statusBarColor }} />
      {/* Header */}
      <View style={styles.headerHolder}>
        <View style={styles.iconHolder}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={textScale(25)}
              color={Colors.white}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>Bill Details</Text>
        </View>
        <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={textScale(25)}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
      {showOptions && (
        <View style={styles.optionHolder}>
          <TouchableOpacity
            onPress={() => setShowOptions(!showOptions)}
            style={{ alignSelf: "flex-end", padding: moderateScale(10) }}
          >
            <AntDesign name="close" size={textScale(15)} color={Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: moderateScale(10) }}
            onPress={() => {
              navigation.navigate("Raise Dispute");
              setShowOptions(!showOptions);
            }}
          >
            <Text style={styles.itemList2}>Raise Dispute</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* First Part */}
        <View style={styles.detailsHolder}>
          <View style={styles.innerView}>
            <View style={{ width: "40%" }}>
              <Text style={styles.keyText}>Business Partner</Text>
            </View>
            <View style={{ width: "60%" }}>
              <Text style={styles.keyText}>1000688</Text>
            </View>
          </View>
          <View style={styles.innerView}>
            <View style={{ width: "40%" }}>
              <Text style={styles.keyText}>Contract Acc. No.</Text>
            </View>
            <View style={{ width: "60%" }}>
              <Text style={styles.keyText}>120002778998978</Text>
            </View>
          </View>
          <View style={styles.innerView}>
            <View style={{ width: "40%" }}>
              <Text style={styles.keyText}>Invoice No.</Text>
            </View>
            <View style={{ width: "60%" }}>
              <Text style={styles.keyText}>400088976666666</Text>
            </View>
          </View>
        </View>
        {/* Second Part */}
        <View style={styles.secondPartHolder}>
          <View style={{ gap: moderateScale(10) }}>
            <Text style={styles.keyText2}>Invoice Date</Text>
            <Text style={styles.valueText}>02.12.2021</Text>
          </View>
          <View style={{ gap: moderateScale(10) }}>
            <Text style={styles.keyText2}>Due Date</Text>
            <Text style={styles.valueText}>02.12.2021</Text>
          </View>
        </View>
        {/* Third Part */}
        <View style={styles.contentHolder}>
          <Text style={styles.keyText2}>From</Text>
          <Image
            source={ImagePath.logo1}
            resizeMode="contain"
            style={{ width: moderateScale(115), height: moderateScale(35) }}
          />
          <Text style={styles.valueText}>Acuiti Labs Ltd.</Text>
          <Text
            style={[
              styles.valueText,
              { fontFamily: FontFamily.Roboto_Regular },
            ]}
          >
            London
          </Text>
          <Text
            style={[
              styles.valueText,
              { fontFamily: FontFamily.Roboto_Regular },
            ]}
          >
            71-101 London, UK
          </Text>
        </View>
        {/* fourth Part */}
        <View style={styles.contentHolder}>
          <Text style={styles.keyText2}>From</Text>
          <Image
            source={ImagePath.logo1}
            resizeMode="contain"
            style={{ width: moderateScale(115), height: moderateScale(35) }}
          />
          <Text style={styles.valueText}>Suometsantie 36 110</Text>
          <Text
            style={[
              styles.valueText,
              { fontFamily: FontFamily.Roboto_Regular },
            ]}
          >
            F1
          </Text>
          <Text
            style={[
              styles.valueText,
              { fontFamily: FontFamily.Roboto_Regular },
            ]}
          >
            00630 Helsinki
          </Text>
        </View>
        {/* Fifit Part */}
        <View style={{}}>
          <View style={styles.upperHeader}>
            <View style={styles.headerItemHolder}>
              <Text style={styles.keyText2}>Items</Text>
            </View>
            <View style={styles.headerItemHolder}>
              <Text style={styles.keyText2}>Amount</Text>
            </View>
          </View>
          <View
            style={[
              styles.upperHeader,
              {
                backgroundColor: "transparent",
                borderBottomWidth: 1,
                borderBottomColor: Colors.searchTextColor,
              },
            ]}
          >
            <View style={styles.headerItemHolder}>
              <Text style={styles.valueText}>Posti Parcel</Text>
            </View>
            <View style={styles.headerItemHolder}>
              <Text style={styles.valueText}>$105.20</Text>
            </View>
          </View>
          <View
            style={[
              styles.upperHeader,
              {
                backgroundColor: "transparent",
                borderBottomWidth: 1,
                borderBottomColor: Colors.searchTextColor,
              },
            ]}
          >
            <View style={styles.headerItemHolder}>
              <Text style={styles.valueText}>Printer Services</Text>
            </View>
            <View style={styles.headerItemHolder}>
              <Text style={styles.valueText}>$30.50</Text>
            </View>
          </View>
          <View style={styles.innerView2}>
            <View style={styles.headerItemHolder}>
              <Text style={styles.keyText2}>Sub Total</Text>
            </View>
            <View style={styles.headerItemHolder}>
              <Text style={styles.valueText}>$135.7</Text>
            </View>
          </View>
          <View style={styles.innerView2}>
            <View style={styles.headerItemHolder}>
              <Text style={styles.keyText2}>Balance Due</Text>
            </View>
            <View style={styles.headerItemHolder}>
              <Text style={styles.valueText}>$135.7</Text>
            </View>
          </View>
          <View style={styles.buttonHolder}>
            <CustomButton name={"Pay Now"} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewBillDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(18),
    color: Colors.white,
  },
  headerHolder: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.statusBarColor,
    height: moderateScale(50),
    paddingHorizontal: moderateScale(20),
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: Colors.white,
  },
  iconHolder: {
    gap: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
  },
  keyText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.white,
    fontSize: textScale(12),
  },
  detailsHolder: {
    backgroundColor: Colors.statusBarColor,
    padding: moderateScale(10),
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(10),
  },
  keyText2: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.statusBarColor,
    fontSize: textScale(12),
  },
  valueText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
    fontSize: textScale(12),
  },
  secondPartHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: moderateScale(20),
    borderBottomWidth: 1,
    borderColor: Colors.searchTextColor,
  },
  contentHolder: {
    padding: moderateScale(20),
    gap: moderateScale(3),
    borderBottomWidth: 2,
    borderBottomColor: Colors.searchTextColor,
  },
  headerItemHolder: {
    width: "40%",
    alignItems: "flex-start",
    padding: moderateScale(10),
  },
  upperHeader: {
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.back,
  },
  innerView2: {
    borderBottomWidth: 2,
    borderColor: Colors.searchTextColor,
    width: "70%",
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  buttonHolder: {
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: moderateScaleVertical(10),
  },
  itemList2: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.searchTextColor,
    fontSize: textScale(14),
  },
  optionHolder: {
    borderWidth: 2,
    position: "absolute",
    top: Platform.OS === "android" ? "5%" : "12%",
    zIndex: 1,
    right: 10,
    width: moderateScale(200),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    borderColor: Colors.white,
  },
});
