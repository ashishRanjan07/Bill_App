import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import WrapperContainer from "../../components/WrapperContainer";
import Data from "../../assets/json/PreBills.json";
import InternalHeader from "../../components/InternalHeader";
import { moderateScale, textScale } from "../../utils/ResponsiveSize";
import Colors from "../../utils/AppColor";
import FontFamily from "../../utils/FontFamily";

const PreBills = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemHolder}>
        {/* Bill Number */}
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Bill Number</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.bill_number}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Subscription Id</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.subscription_id}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Start Date</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.start_date}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>End Date</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.end_date}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Quantity</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.quantity}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Amount</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.amount}</Text>
          </View>
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Text style={styles.text}>Bill Status</Text>
          </View>
          <View style={styles.innerView}>
            <Text style={styles.text}>{item?.bill_status}</Text>
          </View>
        </View>
        <View
          style={[styles.colorHolder,{
            backgroundColor:
              item?.bill_status === "closed" &&Colors.green||
              item?.bill_status === "process" &&Colors.orange||
              item?.bill_status === "pending" &&Colors.red,
            borderRadius: moderateScale(10),
          }]}
        ></View>
      </TouchableOpacity>
    );
  };

  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
        <InternalHeader title={"Pre Bills"} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </WrapperContainer>
  );
};

export default PreBills;

const styles = StyleSheet.create({
  itemHolder: {
    borderWidth: 2,
    borderColor: Colors.white,
    elevation: moderateScale(10),
    backgroundColor: Colors.white,
    width: "95%",
    alignSelf: "center",
    borderRadius: moderateScale(5),
    marginVertical: moderateScale(5),
    padding: moderateScale(5),
    shadowRadius: moderateScale(3),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    color: Colors.black,
    fontSize: textScale(12),
    textTransform: "capitalize",
  },
  innerView: {
    width: "50%",
    padding: moderateScale(10),
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text2: {
    fontFamily: FontFamily.Roboto_Bold,
    color: Colors.white,
    fontSize: textScale(25),
  },
  colorHolder:{
    position: "absolute",
    right: 0,
    height: "100%",
    alignSelf: "center",
    top: 5,
    bottom: 5,
    width: "2%",
  }
});
