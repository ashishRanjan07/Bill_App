import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import WrapperContainer from "../../../components/WrapperContainer";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../utils/ResponsiveSize";
import InternalHeader from "../../../components/InternalHeader";
import Colors from "../../../utils/AppColor";
import FontFamily from "../../../utils/FontFamily";
import Entypo from "react-native-vector-icons/Entypo";
import Data from "../../../assets/json/Subscription.json";
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
const ChooseSubscription = ({ route }) => {
    const navigation = useNavigation();

  const { data } = route.params;
  const [showSubscription, setShowSubscription] = useState(false);
  const [showWarranty, setShowWarranty] = useState(false);
  const [showWarrantyDetails, setShowWarrantyDetails] = useState(false);
  const [selectedSubscriptionValue, setSelectedSubscriptionValue] = useState();
  const [selectedWarrantyValue, setSelectedWarrantyValue] = useState();

  return (
    <WrapperContainer>
      <View style={styles.main}>
        <InternalHeader title={"Choose Subscription"} />
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Subscription Details')}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        {/* Subscription Plan Details */}
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.headerText}>Select the Subscription Plan</Text>
            <TouchableOpacity
              style={styles.pickerStyle}
              onPress={() => setShowSubscription(!showSubscription)}
            >
              <View style={styles.listItem}>
                <Text style={styles.optionText}>
                  {selectedSubscriptionValue?.name
                    ? selectedSubscriptionValue?.name
                    : " Select the Subscription Plan"}
                </Text>
                <View>
                  <Entypo
                    name={showSubscription ? "chevron-up" : "chevron-down"}
                    size={textScale(20)}
                    color={Colors.black}
                  />
                </View>
              </View>

              {showSubscription && (
                <View style={{}}>
                  {Data.subscriptions.map((item, index) => (
                    <TouchableOpacity
                      style={styles.optionHolder}
                      key={index}
                      onPress={() => {
                        setSelectedSubscriptionValue(item);
                        setShowSubscription(false);
                      }}
                    >
                      <Text style={styles.optionText}>{item?.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </TouchableOpacity>
            {selectedSubscriptionValue != null && (
              <>
                <View style={styles.view1}>
                  <View style={styles.innerView1}>
                    <Text style={styles.nameText}>Price</Text>
                  </View>
                  <View style={styles.innerView1}>
                    <Text style={styles.nameText}>
                      {selectedSubscriptionValue?.price}
                    </Text>
                  </View>
                </View>
                <Text style={styles.nameText}>
                  Description:{selectedSubscriptionValue?.description}
                </Text>
              </>
            )}
          </View>
        </View>
        {/* Warranty Add On Section  */}
        <View
          style={{ width: "95%", alignSelf: "center", alignItems: "center" }}
        >
          <CustomButton
            name={"Add Warranty"}
            handleAction={() => setShowWarranty(!showWarranty)}
          />
          {showWarranty && (
            <View style={[styles.view, { width: "100%" }]}>
              <View style={styles.innerView}>
                <Text style={styles.headerText}>
                  Select the Add On Warranty Plan
                </Text>
                <TouchableOpacity
                  style={styles.pickerStyle}
                  onPress={() => setShowWarrantyDetails(!showWarrantyDetails)}
                >
                  <View style={styles.listItem}>
                    <Text style={styles.optionText}>
                      {selectedWarrantyValue?.name
                        ? selectedWarrantyValue?.name
                        : " Select the Add On Warranty Plan"}
                    </Text>
                    <View>
                      <Entypo
                        name={
                          showWarrantyDetails ? "chevron-up" : "chevron-down"
                        }
                        size={textScale(20)}
                        color={Colors.black}
                      />
                    </View>
                  </View>

                  {showWarrantyDetails && (
                    <View>
                      {Data.warranties.map((item, index) => (
                        <TouchableOpacity
                          style={styles.optionHolder}
                          key={index}
                          onPress={() => {
                            setSelectedWarrantyValue(item);
                            setShowWarrantyDetails(false);
                          }}
                        >
                          <Text style={styles.optionText}>{item?.name}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </TouchableOpacity>
                {selectedWarrantyValue != null && (
                  <>
                    <View style={styles.view1}>
                      <View style={styles.innerView1}>
                        <Text style={styles.nameText}>Duration</Text>
                      </View>
                      <View style={styles.innerView1}>
                        <Text style={styles.nameText}>
                          {selectedWarrantyValue?.duration}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.nameText}>
                      Coverage:{selectedWarrantyValue?.coverage}
                    </Text>
                  </>
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    </WrapperContainer>
  );
};

export default ChooseSubscription;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  view: {
    marginVertical: moderateScaleVertical(10),
    width: "95%",
    alignSelf: "center",
  },
  headerText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.searchTextColor,
    fontSize: textScale(16),
  },
  innerView: {
    borderWidth: 2,
    padding: moderateScale(10),
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(5),
    gap: moderateScaleVertical(10),
  },
  pickerStyle: {
    borderWidth: 2,
    borderColor: Colors.background,
  },
  optionText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(14),
    color: Colors.black,
  },
  optionHolder: {
    borderWidth: 2,
    marginBottom: moderateScale(5),
    backgroundColor: Colors.background,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    borderColor: Colors.background,
  },
  listItem: {
    width: "100%",
    padding: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  nameText: {
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.searchTextColor,
    fontSize: textScale(14),
  },
  warrantyHolder: {
    width: "100%",
    borderWidth: 2,
    marginTop: moderateScaleVertical(10),
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },
  button: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.statusBarColor,
  },
  buttonText: {
    fontFamily: FontFamily.Roboto_Medium,
    fontSize: textScale(18),
    color: Colors.white,
    padding: moderateScale(10),
  },
});
