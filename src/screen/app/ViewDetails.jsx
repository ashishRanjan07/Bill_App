import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../utils/AppColor";
import InternalHeader from "../../components/InternalHeader";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../utils/ResponsiveSize";
import FontFamily from "../../utils/FontFamily";
import Data from "../../assets/json/ViewDetails.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ViewDetails = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemHolder}>
        <TouchableOpacity style={styles.topView}>
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={textScale(30)}
            color={Colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contentHolder}
          onPress={() => navigation.navigate("View Bill Details")}
        >
          <View style={styles.subIdHolder}>
            <Text style={styles.text}>Sub. ID</Text>
            <Text style={styles.text2}>{item?.subId}</Text>
          </View>
          <View style={styles.descriptionView}>
            <View style={styles.detailsTextHolder}>
              <Text style={styles.amountText}>Amount</Text>
              <Text style={styles.priceText}>${item?.amount}</Text>
            </View>
            <View style={styles.detailsTextHolder}>
              <Text style={styles.amountText}>Due Date</Text>
              <Text style={styles.amountText}>{item?.date}</Text>
            </View>
          </View>
          <View style={{ width: "10%", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="chevron-down"
              color={Colors.black}
              size={textScale(20)}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <SafeAreaView style={{ backgroundColor: Colors.background }} />
      <StatusBar
        backgroundColor={Colors.background}
        barStyle={"dark-content"}
      />
      <InternalHeader title={"View Details"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.upperDesignView} />
        <View
          style={{
            marginVertical: moderateScaleVertical(30),
            width: "95%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity style={styles.selectHolder}>
            <Text
              style={{
                fontFamily: FontFamily.Roboto_Medium,
                fontSize: textScale(14),
                color: Colors.statusBarColor,
              }}
            >
              Select All
            </Text>
          </TouchableOpacity>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewDetails;

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
  selectHolder: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "30%",
    alignSelf: "flex-end",
    padding: moderateScale(10),
  },
  itemHolder: {
    width: "100%",
    marginVertical: moderateScaleVertical(5),
    padding: moderateScale(10),
    alignItems: "center",
    flexDirection: "row",
    height: moderateScale(75),
  },
  text: {
    fontFamily: FontFamily.Roboto_Regular,
    fontSize: textScale(13),
    color: Colors.black,
  },
  text2: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(14),
    color: Colors.black,
  },
  subIdHolder: {
    borderWidth: 2,
    width: "25%",
    height: moderateScale(70),
    borderRadius: moderateScale(5),
    borderColor: Colors.boxColor,
    backgroundColor: Colors.boxColor,
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(3),
  },
  amountText: {
    fontSize: textScale(12),
    fontFamily: FontFamily.Roboto_Medium,
    color: Colors.black,
  },
  priceText: {
    fontFamily: FontFamily.Roboto_Bold,
    fontSize: textScale(12),
    color: Colors.amountTextColor,
  },
  topView: {
    width: "15%",
    alignItems: "center",
  },
  contentHolder: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    overflow: "hidden",
    elevation: moderateScale(5),
  },
  descriptionView: {
    width: "55%",
    gap: moderateScale(10),
  },
  detailsTextHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
