import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import WrapperContainer from "../../../components/WrapperContainer";
import InternalHeader from "../../../components/InternalHeader";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../utils/ResponsiveSize";
import Colors from "../../../utils/AppColor";
import FontFamily from "../../../utils/FontFamily";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ViewEntitlementDetails = ({ route }) => {
  const { item } = route.params;
  console.log(item, "Line 8");
  return (
    <WrapperContainer>
      <InternalHeader title={"Entitlements Details"} />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.headerText}>Basic Entitlement Details</Text>
            <Feather
              name="file-text"
              color={Colors.statusBarColor}
              size={textScale(25)}
            />
          </View>
          <View style={styles.view1}>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>Product Offering</Text>
            </View>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>
                {item?.details?.product_offering}
              </Text>
            </View>
          </View>
          <View style={styles.view1}>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>Quantity</Text>
            </View>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>{item?.details?.quantity}</Text>
            </View>
          </View>
          <View style={styles.view1}>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>Document No</Text>
            </View>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>
                {item?.details?.organizational_document_no}
              </Text>
            </View>
          </View>
          <View style={styles.view1}>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>Entitlement Modal</Text>
            </View>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>
                {item?.details?.entitlement_modal}
              </Text>
            </View>
          </View>
          <View style={styles.view1}>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>Business Category</Text>
            </View>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>
                {item?.details?.business_category}
              </Text>
            </View>
          </View>
          <View style={styles.view1}>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>Service Right</Text>
            </View>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>{item?.details?.the_right}</Text>
            </View>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.headerText}>Date</Text>
            <MaterialIcons
              name="calendar-month"
              color={Colors.statusBarColor}
              size={textScale(25)}
            />
          </View>
          <View style={styles.view1}>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>Valid From</Text>
            </View>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>
                {item?.details?.date?.valid_from}
              </Text>
            </View>
          </View>
          <View style={styles.view1}>
            <View style={styles.innerView1}>
              <Text style={styles.text1}>Valid To</Text>
            </View>
            <View style={styles.innerView1}>
              <Text style={styles.text1}> {item?.details?.date?.valid_to}</Text>
            </View>
          </View>
        </View>

        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.headerText}>Item Details History</Text>
            <FontAwesome
              name="sitemap"
              color={Colors.statusBarColor}
              size={textScale(25)}
            />
          </View>
          {/* SubInner View */}

          {item?.itemDetails?.itemlist.map((itemList, index) => (
            <View
              style={{
                borderWidth: 2,
                width: "95%",
                alignSelf: "center",
                padding: moderateScale(10),
                borderColor: Colors.background,
                backgroundColor: Colors.background,
                borderRadius: moderateScale(5),
                marginVertical: moderateScaleVertical(5),
              }}
            >
              <View style={styles.view1}>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>Operation</Text>
                </View>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>{itemList?.operation}</Text>
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>Business Event</Text>
                </View>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>{itemList?.businessEvent}</Text>
                </View>
              </View>
              <View style={styles.view1}>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>Document Type</Text>
                </View>
                <View style={styles.innerView1}>
                  <Text style={styles.text1}>{itemList?.documentType}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default ViewEntitlementDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  view: {
    borderWidth: 2,
    marginVertical: moderateScaleVertical(10),
    width: "95%",
    alignSelf: "center",
    padding: moderateScale(10),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(5),
    borderColor: Colors.white,
    elevation: moderateScale(5),
    shadowRadius: moderateScale(3),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: moderateScaleVertical(10),
  },
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.statusBarColor,
    fontSize: textScale(18),
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
});
